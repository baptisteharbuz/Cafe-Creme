import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Produitservice from "../../Services/ProduitService";
// Images
import LogoArome from "../../Assets/Images/Logos/Arome-marron.svg";
import LogoSaveur from "../../Assets/Images/Logos/Saveur-marron.svg";
import LogoGrain from "../../Assets/Images/Logos/Grain-marron.svg";
// Style
import "../../Styles/AdminStyles/NouveauProduitStyle.scss";

const Produit = () => {
  const [produit, setProduit] = useState({});

  useEffect(() => {
    const fetchNewProduit = async () => {
      try {
        const response = await Produitservice.GetNewProduit();
        setProduit(response.data[0]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchNewProduit();
  }, []);

  return (
    <>
      <div className="component-nouveau-produit">
        <div className="container-produit">
          <div className="nouveau-produit-image">
            <img src={produit.Image} alt="Nouveau Café chez Café Crème" />
          </div>
          <div className="nouveau-produit-texte">
            <h2 className="txt-pays">{produit.Pays}</h2>
            <div className="line-brown"></div>
            <h3 className="txt-produit">{produit.Produit}</h3>
            <h4 className="txt-forme">{produit.Forme}</h4>
            <p className="txt-description">{produit.Description}</p>
            <div className="arome-container">
              <img src={LogoArome} alt="Logo arômes" />
              <h5 className="txt-arome">Arômes : {produit.Arome}</h5>
            </div>
            <div className="saveur-container">
              <img src={LogoSaveur} alt="Logo saveur" />
              <h5 className="txt-saveur">Saveurs : {produit.Saveur}</h5>
            </div>
            <div className="intensite-container">
              <img src={LogoGrain} alt="Logo intensité du café" />
              <h5 className="txt-intensite">Intensité : {produit.Intensite}</h5>
            </div>
            <div className="line-brown"></div>
            {produit.Bio === 1 && <h5 className="txt-bio">Certifié Bio</h5>}
            <div className="robusta-arabica">
              {produit.Robusta !== null && (
                <h5 className="txt-robusta">Robusta : {produit.Robusta} %</h5>
              )}
              {produit.Arabica !== null && (
                <h5 className="txt-arabica">Arabica : {produit.Arabica} %</h5>
              )}
            </div>
            <div className="container-button">
              <Link
                to={`/produit/${produit.Id}`}
                className="link-no-decoration"
                aria-label="Découvrir les détails de notre nouveau café"
              >
                <button className="button-decouvrir" title="Découvrir les détails de notre nouveau café">Découvrir</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Produit;
