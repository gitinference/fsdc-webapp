import React from "react";
import logo1 from "../assets/CienciasMedicasUPR.png";
import logo2 from "../assets/UCienciasPublicas.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logos">
        <img src={logo1} alt="University Logo 1" className="logo" />
        <img src={logo2} alt="University Logo 2" className="logo" />
      </div>
      <h1 className="title">Universidad de Puerto Rico</h1>
      <h2 className="subtitle">Recinto de Ciencias Médicas<br/>Escuela Graduada de Salud Pública</h2>
    </header>
  );
};

export default Header;
