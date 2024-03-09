import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PanierService from "../Services/PanierService";
import X from "../../Assets/Images/Logos/x.svg";
import "../../Styles/UtilisateurStyles/PanierStyle.scss";
import { usePanier } from "../../Context/PanierContext"

const PanierComponent = ({ panier }) => {
  // const [quantite, setQuantite] = useState(panier.Quantite || 1);
  const { supprimerDuPanier, modifierQuantite } = usePanier();

  const handleSuppression = () => {
    supprimerDuPanier(panier.PR_Id);
  };

  const ajusterQuantite = (modifier) => {
    const nouvelleQuantite = panier.PU_Quantite + modifier;
    if (nouvelleQuantite < 1) {
      handleSuppression();
      return;
    }
    modifierQuantite(panier.PR_Id, nouvelleQuantite);
  };

  return (
    <div className="panier-card-produit">
      <Link className="link-no-decoration" to={`/produit/${panier.Id_Produit}`}>
        <div className="panier-card-img">
          <img src={panier.Image} alt={panier.Produit} className="img-panier" />
        </div>
      </Link>
      <div className="panier-card-Texte">
        <h3 style={{ margin: "0", color: "#240E00" }}>{panier.Prix} €</h3>
        <h4 style={{ color: "#240E00", margin: "0" }}>{panier.Pays}</h4>
        <h4 style={{ color: "#240E00", margin: "0" }}>{panier.Produit}</h4>
        <p style={{ margin: "0", color: "#240E00" }}>{panier.Forme}</p>
        <div className="container-quantite-panier">
          <p style={{ margin: "0", color: "#240E00" }}>Qté: {panier.PU_Quantite}</p>
          <button className="button-panier" onClick={() => ajusterQuantite(1)}>+</button>
          <button className="button-panier" onClick={() => ajusterQuantite(-1)}>-</button>
        </div>
      </div>
      <div className="panier-card-x">
        <img className="x" src={X} alt="supprimer" onClick={handleSuppression} />
      </div>
    </div>
  );
};

export default PanierComponent;
