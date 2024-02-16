import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../Context/AuthContext";
import { usePanier } from "../Context/PanierContext"
// import PanierService from "../Services/PanierService";
import "../Styles/ProduitListStyle.scss";
import Tasse from "../Assets/Images/Logos/Tasse-cafe-marron.svg";

const ProduitListComponent = ({
  Id,
  Image,
  Pays,
  Produit,
  Arome,
  Saveur,
  Prix,
}) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { ajouterAuPanier } = usePanier();
  const [produit, setProduit] = useState({});
  
  
  const AjoutAuPanier = () => {
    if (!user) {
      toast.warn("Veuillez vous connecter pour ajouter des produits au panier.");
      return;
    }
    try {
      const produitAjoute = {
        UT_Id: user.UT_Id,
        PR_Id: Id,
        PU_Quantite: 1,
        Image,
        Pays,
        Produit,
        Prix,
        Arome,
        Saveur,
      };
  
      ajouterAuPanier(produitAjoute);
      toast.success("Produit ajouté au panier !");
    } catch (error) {
      toast.error("Erreur lors de l'ajout au panier.");
    }
  };

  return (
    <div className="card-produit">
      <Link className="link-no-decoration" to={`/produit/${Id}`}>
        <img className="img-produit-list" src={Image} alt={Produit} />
        <h5>{Pays}</h5>
        <h5>{Produit}</h5>
        <h6>
          {Arome} & {Saveur}
        </h6>
        <h5>{Prix}€</h5>
        </Link>
        <div className="container-decouvrir-ajouter-panier">
          <button className="decouvrir-button">Découvrir</button>
          <img src={Tasse} onClick={AjoutAuPanier} className="ajouter-panier-button"/>
        </div>
    </div>
  );
};

export default ProduitListComponent;
