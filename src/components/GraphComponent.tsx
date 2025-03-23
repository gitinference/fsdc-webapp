import React, { useEffect, useState } from "react";
import embed from "vega-embed";

declare global {
  interface Window {
    vegaEmbed: any;
  }
}
// Manually assign `vegaEmbed` to `window`
import("vega-embed").then((module) => {
  window.vegaEmbed = module.default;
});



interface GraphComponentProps {
  endpoint: string; // api endpoint to fetch graph.
  params?: Record<string, string | number>; // optional parameters for the api endpoint.

}

function GraphComponent({ endpoint, params }: GraphComponentProps) {
  const [graphHtml, setGraphHtml] = useState<string | null>(null); // stores the graph html
  const [error, setError] = useState<string | null>(null); // stores error messages
  const [loading, setLoading] = useState<boolean>(false); // stores loading state

  useEffect(() => {
    // Reset everything when endpoint/params change
    setLoading(true);
    setGraphHtml(null);
    setError(null);
    const queryString = params ? "?" + new URLSearchParams(params as any).toString() : ""; // Convert params to query string
    const apiUrl = `https://fsdc.econlabs.net${endpoint}${queryString}`; // Construct the API URL
    console.log("Fetching:", apiUrl);

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Accept": "text/html",
      },
    })

      .then((response) => {// Check if the response is ok
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }
        return response.text(); // Return the response as text
      })
      .then((html) => { // Log the received HTML
        console.log(" Received HTML:", html);
        setGraphHtml(html);

        // Insert HTML into a temporary DOM element
        const parser = new DOMParser(); // Create a new DOMParser
        const doc = parser.parseFromString(html, "text/html"); // Parse the HTML string

        // Find all script tags in the HTML
        const scriptTags = doc.querySelectorAll("script");
        console.log(`Found script tags: ${scriptTags.length}`);

        let vegaScript: string | null = null;


        scriptTags.forEach((script) => { // Loop through each script tag
          if (script.textContent && script.textContent.includes("var spec = ")) { // Check if the script contains the Vega spec
            vegaScript = script.textContent; // Store the script content
          }
        });

        if (!vegaScript) {
          console.error("No script tag with Vega spec found.");
          setLoading(false);
          return;
        }

        // Extract the JSON object from `var spec = {...}`
        if (!vegaScript || typeof vegaScript !== "string") {
          console.error(" vegaScript is not a valid string:", vegaScript);
          return;
        }

        // Extract the JSON object from `var spec = {...}` using a regex pattern
        const match = (vegaScript as string).match(/var spec = (\{[\s\S]*?\});/);


        if (!match) {
          console.error(" No Vega spec found inside script.");
          setLoading(false);
          return;
        }

        const spec = JSON.parse(match[1]); // Parse the JSON object into a JavaScript object
        console.log(" Parsed Vega Spec:", spec);

        // Vega is loaded before rendering
        const checkVega = setInterval(() => {
          if (window.vegaEmbed) { // Check if `vegaEmbed` is available
            clearInterval(checkVega); // Stop the interval
            console.log(" VegaEmbed is now available!");

            // Render Vega chart
            window.vegaEmbed("#vis", spec)
              .then(() => {
                console.log(" Vega chart rendered!");
                setLoading(false);
              })
              .catch((err: any) => {
                console.error(" Vega error:", err);
                setError(err.message);
                setLoading(false);
              });
          }
        }, 500);
      })
      .catch((error) => {
        console.error(" Error fetching graph:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [endpoint, params]);




  return (
    <div className="w-full flex flex-col items-center min-h-[600px]">
      <h2 className="text-xl font-bold mb-4">Graph from {endpoint}</h2>

      <div className="relative w-full h-[600px] flex justify-center items-center">
        {/* Loader inside this graph area only */}
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-80 z-10 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        )}

        {error ? (
          <p className="text-red-500 z-20">{error}</p>
        ) : (
          graphHtml && (
            <div
              id="graph-container"
              className={`w-full h-full transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
            >
              <div id="vis" className="w-full h-full"></div>
              <div dangerouslySetInnerHTML={{ __html: graphHtml }} className="w-full"></div>
            </div>
          )
        )}
      </div>
    </div>
  );



}
export default GraphComponent;