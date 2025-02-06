import React from "react";
import logo1 from "../assets/CienciasMedicasUPR.png";
import logo2 from "../assets/UCienciasPublicas.png";


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Logo */}
        <div className="logo-container">
          <img src={logo1} alt="University Logo 1" className="logo" />
        </div>

        {/* Centered Title & Subtitle */}
        <div className="header-text">
          <h1 className="subtitle">Universidad de Puerto Rico</h1>
          <h2 className="subtitle">
            Recinto de Ciencias Médicas<br />
            Escuela Graduada de Salud Pública
          </h2>
        </div>

        {/* Right Logo */}
        <div className="logo-container">
          <img src={logo2} alt="University Logo 2" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
