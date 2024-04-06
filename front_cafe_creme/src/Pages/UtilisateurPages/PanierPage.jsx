import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import PanierService from "../Services/PanierService";
import PanierComponent from "../../Components/UtilisateurComponents/PanierComponent";
import AuthContext from "../../Context/AuthContext";
import "../../Styles/UtilisateurStyles/PanierStyle.scss";
import { usePanier } from "../../Context/PanierContext"

const Panier = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const { panierItems } = usePanier();


  const totalPanier = panierItems.reduce((total, produit) => {
    const prix = parseFloat(produit.Prix);
    const quantite = parseInt(produit.PU_Quantite, 10);
    return total + prix * quantite;
  }, 0).toFixed(2);


  return (
    <div className="container-panier">
      <div className="titre">
        <h2>PANIER</h2>
      </div>
      <div className="container-panier-total">
        {isAuthenticated ? (
          panierItems.length > 0 ? (
            <div className="panier-container">
              <div className="produits-panier">
                {panierItems.map((produit, index) => (
                  <PanierComponent key={index} panier={produit} />
                ))}
              </div>
              <div className="total-panier">
                <h4>TOTAL</h4>
                <div className="line-beige"></div>
                <div className="container-sous-total">
                  <h4>Sous-total</h4>
                  <h4>{totalPanier} €</h4>
                </div>
                <button className="paiement-button" onClick={() => navigate('/paiement')}>Paiement</button>
              </div>
            </div>
          ) : (
            <div className="container-panier-vide">
              <p>Votre panier est vide.</p>
            </div>
          )
        ) : (
          <div className="container-panier-non-connecte">
            <p>Veuillez vous connecter pour voir votre panier.</p>
            <button className="login-button" onClick={() => navigate('/login')}>Se connecter</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Panier;
