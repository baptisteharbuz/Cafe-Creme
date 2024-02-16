import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { usePanier } from "../Context/PanierContext"
// IMAGES
import LogoBeige from "../Assets/Images/Logos/Logo-café-crème-beige.svg";
import LogoMarron from "../Assets/Images/Logos/Logo-café-crème-marron.svg";
import UserBeige from "../Assets/Images/Logos/User-beige.svg";
import TasseBeige from "../Assets/Images/Logos/Tasse-cafe-beige.svg";
import UserMarron from "../Assets/Images/Logos/User-marron.svg";
import TasseMarron from "../Assets/Images/Logos/Tasse-cafe-marron.svg";
import Grain from "../Assets/Images/Logos/Grain-beige.svg";
// STYLES
import "../Styles/HeaderStyle.scss";


const Header = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  const { panierItems } = usePanier();
  const userLinkDestination = isAuthenticated ? (isAdmin ? "/admin" : "/profil") : "/connexion";
  const totalQuantite = panierItems.reduce((total, item) => total + item.PU_Quantite, 0);

  

  return (
    <nav className="navbar">
      <div className="header-gauche">
        {/* <Logo className="logo-CC" alt="Logo Café Crème" /> */}
        <img className="logo-cafe-creme-marron" src={LogoMarron} alt="Logo Café Crème" />
      </div>
      <div className="header-droit">
        <ul>
        <li className="hide-accueil"><Link to="/accueil">Accueil</Link></li>
        <li><Link to="/accueil"><img className="logo-cafe-creme-beige" src={LogoBeige} alt="Logo Café Crème" /></Link></li>
        <li className="hide-accueil"><Link to="/cafetest">Café Test</Link></li>
        <li><Link to="/cafetest"><img className="logo-header-beige" src={Grain} alt="Panier" /></Link></li>
        <li className="hide-accueil"><Link to="/noscafes">Nos Cafés</Link></li>
        <li><Link to="/noscafes"><img className="logo-header-beige" src={Grain} alt="Panier" /></Link></li>
        <li>
            <Link to="/panier">
              <div className="container-panier-header">
              <img className="logo-header-beige" src={TasseBeige} alt="Panier" />
              <img className="logo-header-marron" src={TasseMarron} alt="Panier" />
                {totalQuantite > 0 && <span className="panier-quantite">{totalQuantite}</span>}
              </div>
            </Link>
          </li>
          <li>
            <Link to={userLinkDestination}>
              <img className="logo-header-beige" src={UserBeige} alt="Profil" />
              <img className="logo-header-marron" src={UserMarron} alt="Profil" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
