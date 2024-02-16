import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import "../Styles/AccueilStyle.scss";
// Images
import CafeAccueil from "../Assets/Images/Grains/2-cafés-grains.png";
import CafeCremeVideo from "../Assets/Videos/Cafe-creme-video.mp4"
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
                {/* <video autoPlay loop muted className="fullscreen-video">
          <source src={CafeCremeVideo} type="video/mp4"></source>
        </video> */}
      </div>
      <div className="jeux-container">
        <h2>Quel café est fait pour vous ?</h2>
        <Link className="link-no-decoration" to="/cafetest">
          <button>Faire le test</button>
        </Link>
      </div>
      <div className="nouveau-produit-container">
        <h2>NOUVEAU</h2>
        <NouveauProduit />
      </div>
      <div className="nos-cafe-container">
        <h2>NOS CAFÉS</h2>
        <NosCafes />
      </div>
    </div>
  );
};

export default Accueil;
