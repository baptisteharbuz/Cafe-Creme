import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { usePanier } from "../../Context/PanierContext"
// IMAGES
import LogoBeige from "../../Assets/Images/Logos/Logo-café-crème-beige.svg";
import LogoMarron from "../../Assets/Images/Logos/Logo-café-crème-marron.svg";
import UserBeige from "../../Assets/Images/Logos/User-beige.svg";
import TasseBeige from "../../Assets/Images/Logos/Tasse-cafe-beige.svg";
import UserMarron from "../../Assets/Images/Logos/User-marron.svg";
import TasseMarron from "../../Assets/Images/Logos/Tasse-cafe-marron.svg";
import Grain from "../../Assets/Images/Logos/Grain-beige.svg";
// STYLES
import "../../Styles/BodyStyles/HeaderStyle.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  const { panierItems } = usePanier();
  const userLinkDestination = isAuthenticated ? "/profil" : "/login";
  const totalQuantite = panierItems.reduce((total, item) => total + item.PU_Quantite, 0);


  <FaMagnifyingGlass />
  return (
    <nav className="navbar">
      <div className="header-gauche">
        <img className="logo-cafe-creme-marron" src={LogoMarron} alt="Logo Café Crème" />
      </div>
      <div className="header-droit">
        <ul>
          <li className="hide-accueil"><Link to="/accueil" aria-label="naviguer vers la page d'accueil">Accueil</Link></li>
          <li><Link to="/accueil" aria-label="naviguer vers la page d'accueil"><img className="logo-cafe-creme-beige" src={LogoBeige} alt="Logo Café Crème" /></Link></li>
          <li className="hide-accueil"><Link to="/cafetest" aria-label="Café Test">Café Test</Link></li>
          <li><Link to="/cafetest" aria-label="Faire le test de café"><FaMagnifyingGlass style={{ fontSize: '2rem' }} /></Link></li>
          <li className="hide-accueil"><Link to="/noscafes" aria-label="Découvrir nos cafés">Nos Cafés</Link></li>
          <li><Link to="/noscafes" aria-label="Découvrir nos cafés"><img className="logo-header-beige" src={Grain} alt="Faire le test de café" /></Link></li>
          <li>
            <Link to="/panier" aria-label="Acceder au panier">
              <div className="container-panier-header">
                <img className="logo-header-beige" src={TasseBeige} alt="Acceder au panier" />
                <img className="logo-header-marron" src={TasseMarron} alt="Acceder au panier" />
                {totalQuantite > 0 && <span className="panier-quantite">{totalQuantite}</span>}
              </div>
            </Link>
          </li>
          <li>
            <Link to={userLinkDestination} aria-label="Naviguer sur le profil">
              <img className="logo-header-beige" src={UserBeige} alt="Acceder au profil" />
              <img className="logo-header-marron" src={UserMarron} alt="Acceder au profil" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
