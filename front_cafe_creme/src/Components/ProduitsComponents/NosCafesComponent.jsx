import React from "react";
import { Link } from "react-router-dom";
// import Produitservice from "../Services/ProduitService";
// Images
import CafeMoulu from "../../Assets/Images/Moulu/Colombian - Colombian Carnival (moulu).png";
import Capsule from "../../Assets/Images/Capsule/Brasilian - Amazon Rainforest Roast (Capsule).png";
import CafeGrain from "../../Assets/Images/Grains/2-cafés-grains.png";
// Style
import "../../Styles/ProduitStyles/NosCafesStyle.scss";

const NosCafe = () => {

  return (
    <>
      <section className="section-block-nos-cafes">
        <Link className="link-no-decoration" href="/noscafes/Café moulu" aria-label="Découvrir les cafés moulus">
          <div className="nos-cafes">
            <div className="container">
              <img src={CafeMoulu} alt="Découvrir les cafés moulus" />
              <h2>Café Moulu</h2>
            </div>
            <button title="Découvrir les cafés moulus">Découvrir les cafés moulus</button>
          </div>
        </Link>
        <Link className="link-no-decoration" href="/noscafes/Capsule" aria-label="Découvrir les capsules">
          <div className="nos-cafes">
            <div className="container">
              <img src={Capsule} alt="Découvrir les capsules" />
              <h2>Capsule</h2>
            </div>
            <button title="Découvrir les capsules">Découvrir les capsules</button>
          </div>
        </Link>
        <Link className="link-no-decoration" href="/noscafes/Café en grains" aria-label="Découvrir les cafés en grains">
          <div className="nos-cafes">
            <div className="container">
              <img src={CafeGrain} alt="Découvrir les cafés en grains" />
              <h2>Café en grain</h2>
            </div>
            <button title="Découvrir les cafés en grains">Découvrir les cafés en grains</button>
          </div>
        </Link>
      </section>
    </>
  );
};

export default NosCafe;





