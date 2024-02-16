import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../Assets/Images/Logos/Logo-café-crème-beige.svg";
import ReCAPTCHA from 'react-google-recaptcha';
import AuthContext from "../Context/AuthContext";
import "../Styles/LoginStyle.scss";
import LoginService from "../Services/LoginService";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(AuthContext);
  const [capVal, setCapVal] = useState(null)
  const [utilisateur, setUtilisateur] = useState({
    Nom: "",
    Prenom: "",
    Mail: "",
    MotDePasse: "",
  });
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
    try {
      const res = await LoginService.addUtilisateur(utilisateur);
      setIsAuthenticated(true);
      setUser(res.data.user);
      // if (response && response.isAuthenticated) {

      //   toast.success(`Bienvenue ${utilisateur.Nom} !`);
      //   navigate("/accueil");
      // } else {
      //   toast.error("Inscription réussie, mais la connexion automatique a échoué.");
      // }
      const response = await LoginService.login(utilisateur);

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUser(response.data.user);
      } else {
        toast.success(`Bonjour ${response.data.user.UT_Nom} !`);
        navigate("/accueil");
      }
    } catch (e) {
      console.log(e);
      toast.error("Impossible de créer votre compte.");
    }
  };

  // useEffect(() => {
  //   // user.UT_Nom=utilisateur.Nom;
  //   // user.UT_Prenom=utilisateur.Prenom
  //   user.UT_Mail = utilisateur.Mail
  //   user.UT_MotDePasse = utilisateur.MotDePasse
  // })

  return (
    <>
      <div className="login-container">
        <div className="card-inscription-container">
          <div className="logo-background"></div>
          <div className="card">
            <h2>Inscription</h2>
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
              <input
                type="password"
                id="password"
                name="MotDePasse"
                placeholder="Mot de passe"
                // minlength="8"
                required
                value={utilisateur.MotDePasse}
                onChange={handleChange}
              />
              <ReCAPTCHA
                sitekey="6LeARnUpAAAAAH1aHZSED1TQsHbEhNknkZM9OqlK"
                onChange={val => setCapVal(val)}
              />
              <button className="button-login" onClick={handleAdd}>Inscription</button>
            </form>
            <Link className="link-no-decoration" to="/connexion">
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
