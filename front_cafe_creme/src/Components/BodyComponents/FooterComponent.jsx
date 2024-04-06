import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

// Style
import "../../Styles/BodyStyles/FooterStyle.css";
// Image
import Logo from "../../Assets/Images/Logos/Logo-café-crème-beige.svg";

const iconStyle = {
  color: 'white',
  fontSize: '2em',
  marginLeft: '1rem'
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className="logo-cafe-creme" src={Logo} alt="Logo Café Crème" />
      </div>
      <div className="footer-center">
        <Link className="link-no-decoration" to="/politique"><p className="footer-link">Politique de confidentialité</p></Link>
      </div>
      <div className="footer-right">
        <FaFacebook style={iconStyle} />
        <IoLogoInstagram style={iconStyle} />
        <FaTwitter style={iconStyle} />
      </div>
    </div>
  );
};

export default Footer;
