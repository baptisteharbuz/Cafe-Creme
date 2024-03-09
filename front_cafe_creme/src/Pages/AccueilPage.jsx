import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "../Styles/AccueilStyle.scss";
// Images
import CafeAccueil from "../Assets/Images/Grains/2-cafés-grains.png"
import CafeCremeVideo from "../Assets/Videos/Cafe-creme-video.mp4"
// Component
import NouveauProduit from "../Components/ProduitsComponents/NouveauProduitComponent";
import NosCafes from "../Components/ProduitsComponents/NosCafesComponent";
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
        {/* <video autoPlay loop muted className="fullscreen-video">
          <source src={CafeCremeVideo} type="video/mp4"></source>
        </video> */}
      </div>
      <div className="jeux-container">
        <h1>Quel café est fait pour vous ?</h1>
        <Link className="link-no-decoration" to="/cafetest" aria-label="Je fais le test">
          <button title="Je fais le test pour découvrir mon café">Je fais le test</button>
        </Link>
      </div>
      <div className="nouveau-produit-container">
        <h1>NOUVEAU</h1>
        <NouveauProduit />
      </div>
      <div className="nos-cafe-container">
        <h1>NOS CAFÉS</h1>
        <NosCafes />
      </div>
    </div>
  );
};

export default Accueil;
