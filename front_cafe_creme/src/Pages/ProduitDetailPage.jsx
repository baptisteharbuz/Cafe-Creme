import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Produitservice from "../Services/ProduitService";
// Images
import LogoArome from "../Assets/Images/Logos/Arome-maron.svg";
import LogoSaveur from "../Assets/Images/Logos/Saveur-maron.svg";
import LogoGrain from "../Assets/Images/Logos/Grain-maron.svg";

const Produit = () => {
  const { id } = useParams();

  const [produit, setProduit] = useState({});

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await Produitservice.GetProduitById(id);
        setProduit(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProduit();
  }, []);

  return (
    <>
      <div className="component-nouveau-produit">
        <div className="nouveau-produit-image">
          <img src={produit.Image} alt="Nouveau Café chez Café Crème" />
        </div>
        <div className="nouveau-produit-texte">
          <h2 className="h2-pays">{produit.Pays}</h2>
          <div className="line"></div>
          <h2 className="h2-produit">{produit.Produit}</h2>
          <h2 className="h2-forme">{produit.Forme}</h2>
          <h2 className="h2-description">{produit.Description}</h2>
          <div className="arome-container">
            <img src={LogoArome} alt="Logo arômes" />
            <h2 className="h2-arome">Arômes : {produit.Arome}</h2>
          </div>
          <div className="saveur-container">
            <img src={LogoSaveur} alt="Logo saveur" />
            <h2 className="h2-saveur">Saveurs : {produit.Saveur}</h2>
          </div>
          <div className="intensite-container">
            <img src={LogoGrain} alt="Logo intensité du café" />
            <h2 className="h2-intensite">Intensité : {produit.Intensite}</h2>
          </div>
          <div className="line"></div>
          {produit.Bio === 1 && <h2 className="h2-bio">Certifié Bio</h2>}
          <div className="robusta-arabica">
            {produit.Robusta !== null && (
              <h2 className="h2-robusta">Robusta : {produit.Robusta} %</h2>
            )}
            {produit.Arabica !== null && (
              <h2 className="h2-arabica">Arabica : {produit.Arabica} %</h2>
            )}
          </div>
          <h2 className="h2-Prix">Prix : {produit.Prix}</h2>
          <div>
            <h2 className="h2-bio">Origine : {produit.origine}</h2>
            <h2 className="h2-bio">Degustation : {produit.Degustation}</h2>
            <h2 className="h2-bio">Preparation : {produit.Preparation}</h2>
            <h2 className="h2-bio">Résumé : {produit.Resume}</h2>
          </div>
          {/* <Link to={`/produit/${produit.PR_Id}`}><button>Découvrir</button></Link> */}
        </div>
      </div>
    </>
  );
};

export default Produit;
