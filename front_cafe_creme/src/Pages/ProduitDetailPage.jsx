import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../Context/AuthContext";
import { usePanier } from "../Context/PanierContext"
// import PanierService from "../Services/PanierService";
import Produitservice from "../Services/ProduitService";
// Images
import LogoArome from "../Assets/Images/Logos/Arome-marron.svg";
import LogoSaveur from "../Assets/Images/Logos/Saveur-marron.svg";
import LogoGrain from "../Assets/Images/Logos/Grain-marron.svg";
import Tasse from "../Assets/Images/Logos/Tasse-cafe-beige.svg";
// Style
import "../Styles/NouveauProduitStyle.scss";

const Produit = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { ajouterAuPanier } = usePanier();
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
  }, [id]);

  const AjoutAuPanier = () => {
    if (!user) {
      toast.warn("Veuillez vous connecter pour ajouter des produits au panier.");
      return;
    }
    try {
      const produitAjoute = {
        ...produit,
        UT_Id: user.UT_Id,
        PR_Id: id,
        PU_Quantite: 1,
      };

      ajouterAuPanier(produitAjoute);
      toast.success("Produit ajouté au panier !");
    } catch (error) {
      toast.error("Erreur lors de l'ajout au panier.");
    }
  };

  return (
    <>
      <div className="component-nouveau-produit">
        <div className="container-detail-produit">
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
              <h4 className="txt-arome">Arômes : {produit.Arome}</h4>
            </div>
            <div className="saveur-container">
              <img src={LogoSaveur} alt="Logo saveur" />
              <h4 className="txt-saveur">Saveurs : {produit.Saveur}</h4>
            </div>
            <div className="intensite-container">
              <img src={LogoGrain} alt="Logo intensité du café" />
              <h4 className="txt-intensite">Intensité : {produit.Intensite}</h4>
            </div>
            <div className="line"></div>
            {produit.Bio === 1 && <h4 className="txt-Bio">Certifié Bio</h4>}
            <div className="line-brown"></div>
            <div className="robusta-arabica">
              {produit.Robusta !== null && (
                <h4 className="txt-robusta">Robusta : {produit.Robusta} %</h4>
              )}
              {produit.Arabica !== null && (
                <h4 className="txt-arabica">Arabica : {produit.Arabica} %</h4>
              )}
            </div>
            <div className="acheter-container">
              <h4 className="txt-Prix">Prix : {produit.Prix}€</h4>
              <div className="container-ajouter-panier">
                <button
                  className="button-ajouter-panier"
                  onClick={AjoutAuPanier}
                >
                  Ajouter au panier
                  <img src={Tasse} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="image-separateur">
          <h2 className="txt-son-histoire">SON HISTOIRE</h2>
        </div>
        <div className="histoire-cafe">
          <h3 className="txt-histoire">Origine :</h3>
          <p>{produit.Origine}</p>
          <h3 className="txt-histoire">Degustation :</h3>
          <p>{produit.Degustation}</p>
          <h3 className="txt-histoire">Preparation :</h3>
          <p>{produit.Preparation}</p>
          <h3 className="txt-histoire">Résumé :</h3>
          <p>{produit.Resume}</p>
        </div>
      </div>
    </>
  );
};

export default Produit;
