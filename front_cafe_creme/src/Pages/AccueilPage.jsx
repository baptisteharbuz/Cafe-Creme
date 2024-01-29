import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "../Styles/AccueilStyle.css";
// Images
import CafeAccueil from "../Assets/Images/Grains/2-cafés-grains.png";
// Component
import NouveauProduit from "../Components/NouveauProduitComponent";
import NosCafes from "../Components/NosCafesComponent";
// Pages
// import ProduitDetail from "../Pages/ProduitDetailPages";

const Accueil = () => {
  return (
    <div>
      <div className="accueil-container">
        <h1 className="h1-accueil">CAFE CREME</h1>
        <img
          src={CafeAccueil}
          alt="double café grain Café Crème"
          className="img-accueil"
        />
      </div>
      <div className="jeux-container">
        <h2>Quel café est fait pour vous ?</h2>
        <button>Faire le test</button>
      </div>
      <div className="nouveau-produit-container">
        <h2 className="h2-nouveau">NOUVEAU</h2>
        <NouveauProduit />
      </div>
      <div className="nos-cafe-container">
        <h2>Nos Cafés</h2>
        <NosCafes />
      </div>
    </div>
  );
};

export default Accueil;
