import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Assets/Images/Logos/Logo-café-crème-beige.svg";
import ReCAPTCHA from 'react-google-recaptcha';
import AuthContext from "../../Context/AuthContext";
import "../../Styles/UtilisateurStyles/LoginStyle.scss";
import LoginService from "../../Services/LoginService";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const bcrypt = require('bcryptjs');

const Login = () => {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const [capVal, setCapVal] = useState(null);
  const [utilisateur, setUtilisateur] = useState({
    Nom: "",
    Prenom: "",
    Mail: "",
    MotDePasse: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    if (!capVal) {
      toast.error("Veuillez compléter le CAPTCHA.");
      return;
    }
    if (utilisateur.Nom && utilisateur.Prenom && utilisateur.Mail && utilisateur.MotDePasse) {
      try {
        const res = await LoginService.register(utilisateur);
        setIsAuthenticated(true);
        setUser(utilisateur);
        toast.success(`Bonjour ${utilisateur.Prenom} !`);
        navigate("/accueil");
      } catch (e) {
        console.error("Erreur lors de l'inscription:", e);
        if (e.response && e.response.data && e.response.data.message) {
          toast.error(e.response.data.message);
        } else {
          toast.error("Une erreur est survenue lors de la création du compte.");
        }
      }
    } else {
      toast.error("Veuillez remplir tous les champs du formulaire.");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  return (
    <>
      <div className="login-container">
        <div className="card-register-container">
          <div className="logo-background"></div>
          <div className="card">
            <h2>Register</h2>
            <form>
              <input
                type="text"
                id="nom"
                name="Nom"
                placeholder="Nom"
                required
                value={utilisateur.Nom}
                onChange={handleChange}
              />
              <input
                type="text"
                id="prenom"
                name="Prenom"
                placeholder="Prénom"
                required
                value={utilisateur.Prenom}
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                name="Mail"
                placeholder="monadresse@mail.com"
                required
                value={utilisateur.Mail}
                onChange={handleChange}
              />
              <div className="password-container" style={{ position: 'relative' }}>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  name="MotDePasse"
                  placeholder="Mot de passe"
                  // minlength="8"
                  required
                  value={utilisateur.MotDePasse}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                onChange={val => setCapVal(val)}
              />
              <button className="button-login" onClick={handleAdd}>Register</button>
            </form>
            <Link className="link-no-decoration" to="/login">
              <button className="button-login">Déja un compte ?</button>
            </Link>
          </div>
        </div>
        <div className="logo-login">
          <img src={logo} alt="logo Café Crème" />
        </div>
      </div>
    </>
  );
};

export default Login;




<FaRegEye />