import { useNavigate } from "react-router-dom";

const CoffeeQuestionnaire: React.FC = () => {
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for completing the questionnaire!");
    navigate("/"); // Navigate to hoçmepage or another page after submission
  };

  return (
    <div style={{ padding: "2px", fontFamily: "Arial, sans-serif", maxWidth: "100%", margin: "auto" }}>
      <h1>Coffee Questionnaire</h1>
      <br/><br/><br/>
      <div>
        <p style={{fontSize: 30}}>
          Estimado(a) participante:<br/>
          <br/>
          El Colegio de Ciencias Agrícolas de la Universidad de Puerto Rico, Recinto de Mayagüez 
          lleva a cabo un estudio sobre los costos de la producción de café en Puerto Rico. Esto 
          nos ayudará a evaluar futuros cambios en los precios mínimos del café que establece DACO.<br/>
          <br/>
          La información que usted provea será confidencial y no se utilizará para ningún propósito 
          ajeno a la investigación. Su participación es completamentee voluntaria, puede contestar las 
          preguntas que desea y/o abandonar el estudio en cualquier momento.<br/>
          <br/>
          De tener alguna pregunta puede comunicarse con el Dr. Julio César Hernández al (787)955-3320. 
          Le invitamos a participar completando los formularios. Su contribución será de mucho valor 
          para la industria de café en Puerto Rico.<br/>
          <br/>
          ¡Muchas gracias por su colaboración!
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <br/><br/><br/>

        <div style= {{display:"block", textAlign:"left"}}>
          <label>
          <table>
              <tr>
                <th>
                  ¿Cuál es el número de teléfono del administrador de la finca?&emsp;&emsp;&emsp;
                </th>
                <th>
                  <input type="string" placeholder="Teléfono" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
            

            <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuál es la edad del administrador de la finca?&emsp;&emsp;
                </th>
                <th>
                  <input type="number" placeholder="Edad" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
            </table>

            <br/><br/><br/>

            <table>
            <tr>
              <th>
                ¿Cuál es la fuente principal de ingreso del administrador de la finca?
              </th>
            </tr>
            <tr>
              <th>
                &emsp;&emsp;&emsp;<input type="radio" name="fuente_principal" className="radio-spacing" />
                &emsp;&emsp;&emsp;<label htmlFor="agricola">Agrícola</label><br/>
                &emsp;&emsp;&emsp;<input type="radio" name="fuente_principal" className="radio-spacing" />
                &emsp;&emsp;&emsp;<label htmlFor="empresa_privada">Trabaja en empresa privada</label><br/>
                &emsp;&emsp;&emsp;<input type="radio" name="fuente_principal" className="radio-spacing" />
                &emsp;&emsp;&emsp;<label htmlFor="gobierno">Trabaja en el gobierno</label><br/>
                &emsp;&emsp;&emsp;<input type="radio" name="fuente_principal" className="radio-spacing" />
                &emsp;&emsp;&emsp;<label htmlFor="seguro_social">Seguro social y/o retiro</label><br/>
                &emsp;&emsp;&emsp;<input type="radio" name="fuente_principal" className="radio-spacing" />
                &emsp;&emsp;&emsp;<label htmlFor="cupones">Cupones y transferencias del gobierno</label><br/>
                &emsp;&emsp;&emsp;<input type="radio" name="fuente_principal" className="radio-spacing" />
                &emsp;&emsp;&emsp;<label htmlFor="otra">Otra</label>
                &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>
              </th>
            </tr>

          <br/><br/><br/>

            <table>
              <tr>
                <th>
                  ¿Cuál es el género del administrador de la finca?
                </th>
                <th>
                  &emsp;&emsp;<input type="radio" name="genero"/>
                  &emsp;<label style={{marginRight:"30px"}} htmlFor="masculino">Masculino</label>
                  &emsp;&emsp;<input type="radio" name="genero"/>
                  &emsp;<label style={{marginRight:"30px"}} htmlFor="femenino">Femenino</label>
                  &emsp;&emsp;<input type="radio" name="genero" />
                  &emsp;<label style={{marginRight:"30px"}} htmlFor="autodefinido">Autodefinido</label>
                </th>
              </tr>
            </table>

            <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuál es el estatus marital del administrador de la finca?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="radio" name="estatus" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="casado">Casado</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="estatus" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="divorciado">Divorciado</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="estatus" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="nunca_casado">Nunca Casado</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="estatus" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="viudo">Viudo</label><br/>
                </th>
              </tr>

            <br/><br/><br/>

              <tr>
                <th>
                  ¿Hasta qué grado estudió el administrador de la finca?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="radio" name="grado" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="sexto">Sexto grado o menos</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="grado" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="septimo">Séptimo a noveno grado</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="grado" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="decimo">Décimo a cuarto año</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="grado" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="asociado">Grado asociado</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="grado" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="universitario">Grado universitario</label>
                </th>
              </tr>

            <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuáles enfermedades o condiciones tiene el administrador de la finca? Marque los que apliquen.
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}} />
                  &emsp;&emsp;&emsp;<label htmlFor="diabetes">Diabetes</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="alta_presion">Alta Presión</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="cancer">Cáncer</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="enfermedades_corazon">Enfermedades del Corazón</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="cerebrovasculares">Enfermedades Cerebrovasculares</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="asma">Asma</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="covid19">COVID-19</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="incapacidad">Incapacidad Física</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otra">Otra</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="ninguna">Ninguna</label><br/>
                </th>
              </tr>

              <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuántas personas viven en el hogar del administrador de la finca? 
                  (incluyendo a usted)&emsp;&emsp;&emsp;
                </th>
                <th>
                  <input type="number" placeholder="Total personas" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

            <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuáles son los programas de gobierno en los que usted participó en el {new Date().getFullYear() - 1}?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}} />
                  &emsp;&emsp;&emsp;<label htmlFor="bonafide">Agricultor bonafide</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="subsidio_salarial">Subsidio Salarial</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="abonos">Programa de Abonos</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="regrow">Regrow (Renacer Agrícola)</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="alquiler_tierra_autoridad">Alquiler de tierra de la Autoridad de Tierras</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="analisis_suelo">Análisis de suelo-Laboratorio Agrológico</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="semilla_cafe">Semilla de Café</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="educativas">Actividades educativas del Servicio de Extensión Agrícola</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="visita_servicio_extension_agrícola">Visitas del Servicio de Extensión Agrícola</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otro_adea">Otro programa de ADEA</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otro_dep_agricola">Otro programa del Departamento de Agricultura</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otro_ddec">Otro programa del DDEC</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="prestamos_fida">Préstamos del FIDA</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="prestamos_banco_desarrollo_economico">Préstamos del Banco de Desarrollo Económico</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="seguros_agricolas">Seguros Agrícolas</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="programa_nrcs">Programas NRCS (Natural Resouce and Conservation Service)</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="programas_fsa">Programas FSA (Farm Service Agency)</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="programa" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otra">Otro</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique"></input><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="enfermedad" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="ninguna">Ninguna</label><br/>
                </th>
              </tr>
            </table>

            <br/><br/><br/>

            <table>
              <tr>
                <th>
                  ¿Cuál es el zipcode de la residencia del administrador de la finca?&emsp;&emsp;&emsp;
                </th>
                <th>
                  <input type="number" placeholder="Zipcode administrador" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

            <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuál es la dirección física o postal de la finca?&emsp;&emsp;&emsp;
                </th>
                <th>
                  <input type="text" placeholder="Dirección" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

            <br/><br/><br/>

            <tr>
              <th>
                ¿Cuál es zipcode de la finca?&emsp;&emsp;&emsp;
              </th>
              <th>
                <input type="number" placeholder="Zipcode finca" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
              </th>
            </tr>
          </table>

          <br/><br/><br/>

          <table>
              <tr>
                <th>
                  ¿Cuál es la posición en la empresa de la persona que completa el cuestionario?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="radio" name="posicion" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="dueno">Dueño o Dueña</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="posicion" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="administrador">Administrador</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="posicion" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="obrero_con">Obrero(a) (con sueldo)</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="posicion" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="obrero_sin">Obrero(a) (sin sueldo)</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="posicion" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="familiar_sin">Familiar (sin sueldo)</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="posicion" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="obrero_estudiante_con">Obrero(a) estudiante (con sueldo)</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="posicion" className="radio-spacing"/>
                  &emsp;&emsp;&emsp;<label htmlFor="obrero_estudiante_sin">Obrero(a) estudiante (sin sueldo)</label>
                </th>
              </tr>
            </table>

          <br/><br/><br/>

          <table>
            <tr>
              <th>
                ¿En qué año comenzó operaciones en la finca?&emsp;&emsp;&emsp;
              </th>
              <th>
                <input type="number" placeholder="Año" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
              </th>
            </tr>

          <br/><br/><br/>

            <tr>
              <th>
                ¿Cuántas cuerdas tiene la finca en total?&emsp;&emsp;&emsp;
              </th>
              <th>
                <input type="number" placeholder="Total cuerdas" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
              </th>
            </tr>

          <br/><br/><br/>

            <tr>
                <th>
                  ¿Cuál fue el total de cuerdas sembradas de café arábigo para el {new Date().getFullYear() - 1}?
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total Cuerdas"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              <br/><br/><br/>


            <br/><br/><br/>

              <tr>
                <th>
                  Si usted alquila el terreno, ¿Cuánto usted paga
                  ($) por el alquiler? Por favor, especifíque si el pago fue mensual para 
                  el {new Date().getFullYear() - 1}, anual u otra unidad de tiempo
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  <input
                  type="text"
                  placeholder="Especifique pago"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              <br/><br/><br/>

              <tr>
                <th>
                  Si usted es propietario de su finca y fuera alquilar
                  <strong>una cuerda</strong> de su finca, ¿Cuánto usted hubiese cobrado en el {new Date().getFullYear() - 1} ($) 
                  por el alquiler? Por favor, especifique si el pago es mensual, anual u otra unidad de tiempo.
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  <input
                  type="text"
                  placeholder="Especifique pago"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
              </tr>
              
              <br/><br/><br/>


              <tr> {/* Nueva pregunta */}
                <th>
                    Si usted es propietario de su finca y fuera alquilar <strong>una cuerda</strong> 
                    de su finca, ¿Cuánto usted hubiese cobrado en el {new Date().getFullYear() - 1} ($) por el 
                    alquiler? Por favor, especifique si el pago es mensual, anual u otra unidad de tiempo.</th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  <input
                  type="text"
                  placeholder="Especifique pago"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr> 

              <br/> <br/>
              
              <tr>  {/* Nueva pregunta */}
                <th>
                  ¿Cuántos epmleados trabajaron en el 
                  {new Date().getFullYear() - 1} en la producción de café en la finca?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Siembra a maduración (los primeros dos años y medio)
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total empleados"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Cosecha (últimos 5 a 6 meses)
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total empleados"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              <br/> <br/><br/> 

              <tr>
                <th>
                  ¿Cuánto es el total de horas trabajadas 
                  al día en el {new Date().getFullYear() - 1} por obrero agrícola?
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Siembra a maduración (los primeros dos años y medio)
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total horas"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              
              <br/><br/><br/>


              <tr>
                <th>
                  ¿Cuánto pagó ($) la hora en el 
                  {new Date().getFullYear() - 1} a un obrero agrícola?
                </th>
              </tr>
              <tr>
                  <th>
                  &emsp;&emsp;&emsp;Siembra a maduración (los primeros dos años y medio)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Cosecha (últimos 5 a 6 meses)
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuánto se pagó en el {new Date().getFullYear() - 1} por el 
                  recogido de café arábigo <strong>por almud</strong>?
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Siembra a maduración (los primeros dos años y medio)
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Cosecha (últimos 5 a 6 meses)
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Si en la cosecha se le paga por almud por favor especifíque.
                </th>
                <th>
                  <input
                  type="text"
                  placeholder="Especifique pago"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuál fue la densidad de siembra por cuerda 
                  para el café arábigo (número de árboles <strong>por cuerda</strong>) 
                  en el {new Date().getFullYear() - 1}?
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Café arábigo
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total árboles"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              <br/><br/><br/>


              <tr>
                <th>
                  ¿Cuánto le costó ($) cada arbolito de café arábigo en el año {new Date().getFullYear() - 1}?
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Café arábigo
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>

              <br/><br/><br/>

              <tr>
                <th>
                  ¿Utilizó vale para la compra de arbolitos de café arábigo?
                </th>
                <th>
                  <input type="radio" id="si" name="vale" value="si" />
                  <label style={{marginRight:"30px"}} htmlFor="si">Sí</label>
                  <input type="radio" id="no" name="vale" value="no" />
                  <label htmlFor="no">No</label>
                </th>
              </tr>

              <br/><br/><br/>

              <tr>
                <th>
                  ¿Cuáles fueron los precios y las cantidades de café vendidas para el año {new Date().getFullYear() - 1}?
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Precio de venta por almud del café arábigo maduro ($)
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Cantidad de almud de café arábigo maduro
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almud"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Precio de venta por almud del café arábigo verde-maduro
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total $"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                &emsp;&emsp;&emsp;Cantidad de almud de café arábigo verde-maduro
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almud"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              
              <br/><br/><br/>
            </table>

            <table>
              <tr >
                  <th>
                    En base a los precios del año {new Date().getFullYear() - 1}, ¿Cuánto usted 
                    gastaría ($) para adquirir los siguientes insumos de café en su finca?
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th>
                    <strong>Primer año</strong>
                  </th>
                  <th>
                    <strong>Segundo año</strong>
                  </th>
                  <th>
                    <strong>Tercer año</strong>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Abono
                  </th>
                  <th>
                    <input type="number" placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Cal
                  </th>
                  <th>
                    <input type="number" placeholder="Total $" style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input type="number" placeholder="Total $" style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Superfosfato Triple
                  </th>
                  <th>
                    <input type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Insecticida
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Fungicida
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Herbicida
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Micotrol
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Trampas/Alcohol
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Gasolina
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Equipo (Timer, Mochilas, Bombas de _____ Machetes, Palas, etc)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Transportación (pickup u otro)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px"}}/>
                  </th>
                </tr>
            </table>

            <br/><br/><br/>

            <table>
              <tr>
                  <th>
                    En base a los precios del año {new Date().getFullYear() - 1}, ¿Cuánto usted 
                    gastaría ($) para adquirir los siguientes servicios para la producción de café
                    en su finca?
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th>
                    <strong>Primer año</strong>
                  </th>
                  <th>
                    <strong>Segundo año</strong>
                  </th>
                  <th>
                    <strong>Tercer año</strong>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Seguro de Cosecha y Plantación ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Gastos Administrativos ($) (Libretas, Bolígrafos, Libreta Recibos)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Alquiler de equipo ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Reparación de equipo y maquinaria ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Servicios para el control de plagas y enfermedades ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Servicios de contabilidad ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Servicios legales ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Servicios de gestoría ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Computadora ($)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Gastos misceláneos (alimentos/meriendas para trabajadores)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
              </table>

              <br/><br/><br/>

              <table>
              <tr>
                  <th>
                    <strong>(PREGUNTA OPCIONAL) </strong>¿Cuántos días de trabajo se dedican a 
                    las siguientes tareas para la producción de café en su finca?
                  </th>
                </tr>
                <tr>
                  <th></th>
                  <th>
                    <strong>{new Date().getFullYear() - 3}</strong>
                  </th>
                  <th>
                    <strong>{new Date().getFullYear() - 2}</strong>
                  </th>
                  <th>
                    <strong>{new Date().getFullYear() - 1}</strong>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Preparación de Terreno (incluye construir o reparar caminos)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Alineado de Siembra (o siembras a contorno)
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Cargar Arbolito para Siembra en Predio
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Ahoyado y Siembra
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Resiembra
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Desyerbo
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Abonamiento
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Encalado
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Aplicar Superfosfato Triple
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Aplicación Insecticida
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Aplicación de Herbicida
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Aplicación de Fungicida
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
                <tr>
                  <th>
                    &emsp;&emsp;&emsp;Control Broca
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                  <th>
                    <input
                    type="number"
                    placeholder="Total $"
                    style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                  </th>
                </tr>
            </table>

            <br/><br/><br/>

            <table>
              <tr>
                <th>
                  ¿Cuántos fondos de reconstrucción recibió en el año 
                  {new Date().getFullYear() - 1} de las siguientes agencias a raíz de 
                  algún evento atmosférico?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}} />
                  &emsp;&emsp;&emsp;<label htmlFor="dep_vivienda">Departamento de Vivienda</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="dep_agricultura">Departamento de Agricultura</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="corp_seguros_agricolas">Corporación de Seguros Agrícolas</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="nrcs">NRCS (Natural Resouce and Conservation Service)</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="fsa">FSA (Farm Service Agency)</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otro_usda">Otra Agencia de USDA</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="fema">FEMA</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otro">Otra (especificar)&emsp;</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="ninguna">Ninguna</label><br/>
                </th>
              </tr>
            </table>

            <br/><br/><br/>

            <table>
              <tr>
                <th>
                  En el año {new Date().getFullYear() - 1} ¿Cuántos almudes de su cosecha de café perdió por las siguientes razones?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Plagas
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Sequías
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Inundaciones
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Enfermedad del Dueño
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Falta de Mano de Obra
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Mal manejo
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Robo
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Otra (especificar)
                </th>
                <th>
                  <input
                  type="text"
                  placeholder="Especifique"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;Total
                </th>
                <th>
                  <input
                  type="number"
                  placeholder="Total almudes"
                  style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}/>
                </th>
              </tr>
            </table>

            <br/><br/><br/>

            <table>
              <tr>
                <th>
                  <strong>OPCIONAL </strong>¿Ha podido identificar alguna de estas plagas en sus cultivos de café?
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}} />
                  &emsp;&emsp;&emsp;<label htmlFor="roya">Roya</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="broca">Broca</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="minador">Minador</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="cochinillas_arenosas">Cochinillas Harinosas&emsp;</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="a_roja">Arañita Roja</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cafe" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otra">Otra</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>

                </th>
              </tr>
            </table>            


            <table>
            <br/><br/><br/>

            <tr>
              <th>
                ¿Cuál es la titularidad de la tierra donde está ubicada la finca?
              </th>
            </tr>
            <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="radio" name="titularidad" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="propia">Propia</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="titularidad" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="alquilada">Alquilada</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="titularidad" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="prestada_amigo_suceción">Prestada por la familia o suceción</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="titularidad" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="prestada_amigo">Prestada por un amigo</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="titularidad" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="invadida">Invadida</label><br/>
                  &emsp;&emsp;&emsp;<input type="radio" name="titularidad" className="radio-spacing" />
                  &emsp;&emsp;&emsp;<label htmlFor="otra">Otra</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>
                </th>
              </tr>

              <br/><br/><br/>

            <table>
              <tr>
                <th>
                  ¿Cuáles son los cultivos que posee en la finca? Marque los que apliquen.
                </th>
              </tr>
              <tr>
                <th>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cultivo" className="checkbox-spacing" style={{marginRight:"10px"}} />
                  &emsp;&emsp;&emsp;<label htmlFor="platano">Plátanos</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cultivo" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="guineos">Guineos</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cultivo" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="cacao">Cacao</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cultivo" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="citricos">Cítricos</label><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cultivo" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="otros_frutales">Otros frutales o farináceos (si le aplica, favor de especificar cuales son)</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique frutales" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cultivo" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="hortalizas">Hortalizas (si le aplica, favor de especificar cuales son)</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique hortalizas" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>
                  &emsp;&emsp;&emsp;<input type="checkbox" name="cultivo" className="checkbox-spacing" style={{marginRight:"10px"}}/>
                  &emsp;&emsp;&emsp;<label htmlFor="animales">Animales</label>
                  &emsp;&emsp;&emsp;<input type="text" placeholder="Especifique frutales" style={{border: "1px solid black", marginRight: "10px", padding:"1px"}}></input><br/>
                </th>
              </tr>

              <br/><br/><br/>

            </table>

            </table>
            
          </label>
        </div>




        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CoffeeQuestionnaire;