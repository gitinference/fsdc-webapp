import React, {useEffect, useState} from "react";
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
}

function GraphComponent({endpoint}: GraphComponentProps){

  const [graphHtml, setGraphHtml] = useState<string | null>(null); // stores the graph html
  const[error, setError] = useState<string|null>(null); // stores error messages

  
  useEffect(() => {
    const apiUrl = `https://fsdc.econlabs.net${endpoint}`;
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
            .then(() => console.log(" Vega chart rendered!"))
            .catch((err: any) => console.error(" Vega error:", err));
        }
      }, 500);
    })
    .catch((error) => {
      console.error(" Error fetching graph:", error);
      setError(error.message);
    });
}, [endpoint]);

  


return (
  <div className="w-full flex flex-col items-center">
  <h2 className="text-xl font-bold mb-4">Graph from {endpoint}</h2>
  {error ? (
    <p className="text-red-500">{error}</p>
  ) : graphHtml ? (
    <div id="graph-container" className="w-full h-[600px] flex justify-center">
      <div id="vis" className="w-full h-full"></div> {/* Expands graph size */}
      <div dangerouslySetInnerHTML={{ __html: graphHtml }} className="w-full"></div>
    </div>
  ) : (
    <p>Loading...</p>
  )}
</div>
);


}
export default GraphComponent;