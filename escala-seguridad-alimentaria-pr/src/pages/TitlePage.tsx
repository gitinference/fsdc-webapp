import React from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css"; // Import styles

function FirstPage() {
    const navigate = useNavigate();
  
    function goToNextPage() {
      navigate("/page2");
    }


  return (
    <div className="page">
      <div className="header">
        <img src="assets/CienciasMedicasUPR.png" alt="Logo 1" className="logo" />
        <h2>UNIVERSIDAD DE PUERTO RICO</h2>
        <h3>RECINTO DE CIENCIAS MÉDICAS</h3>
        <h3>ESCUELA GRADUADA DE SALUD PÚBLICA</h3>
        <img src="assets/EscuelaGraduadaSaludPublica.png" alt="Logo 2" className="logo" />
      </div>

      <h1>ESCALA DE SEGURIDAD ALIMENTARIA PARA PUERTO RICO</h1>

      <p className="description">
        ADAPTACIÓN CULTURAL DEL <i>U.S. HOUSEHOLD FOOD SECURITY SURVEY MODULE</i><br />
        DEL DEPARTAMENTO DE AGRICULTURA DE ESTADOS UNIDOS.
      </p>

      <p className="author">
        POR <b>RIVERA-SOTO W.</b> Y FACULTAD Y ESTUDIANTES DEL PROGRAMA DE MAESTRÍA EN NUTRICIÓN<br />
        ESCUELA GRADUADA DE SALUD PÚBLICA, RECINTO DE CIENCIAS MÉDICAS, UNIVERSIDAD DE PUERTO RICO.<br />
        <b>2014</b>
      </p>

      <button className="next-button" onClick={goToNextPage}>Siguiente</button>
    </div>
  );
}

export default FirstPage;