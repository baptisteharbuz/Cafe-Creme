import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Style
import "../../Styles/BodyStyles/FooterStyle.css";
// Image
import Logo from "../../Assets/Images/Logos/Logo-café-crème-beige.svg";
// CONTEXT
import AuthContext from "../../Context/AuthContext";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  return (
    <div className="footer">
      <div className="header-gauche">
        <img className="logo-cafe-creme" src={Logo} alt="Logo Café Crème" />
      </div>
    </div>
  );
};

export default Header;
