import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// STYLES
import "../../Styles/UtilisateurStyles/LoginStyle.scss";
// IMAGES
import logo from "../../Assets/Images/Logos/Logo-café-crème-beige.svg";
// CONTEXT
import AuthContext from "../../Context/AuthContext";
// SERVICE
import LoginService from "../../Services/LoginService";

const Login = () => {
  const [utilisateur, setUtilisateur] = useState({
    Mail: "",
    MotDePasse: "",
  });
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(AuthContext);


  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await LoginService.login({
        Mail: utilisateur.Mail,
        MotDePasse: utilisateur.MotDePasse,
      });

      if (response.access_token && response.isLoggedIn) {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        setIsAuthenticated(true);
        setUser(response.user);
        navigate("/accueil");
        if (response.user.UT_IsAdmin) {
          toast.success(`Bonjour Administrateur ${response.user.UT_Nom} !`);
        } else {
          toast.success(`Bonjour ${response.user.UT_Nom} !`);
        }
      } else {
        toast.error("Une erreur est survenue lors de la connexion");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Identifiant ou mot de passe incorect");
      } else {
        toast.error("Une erreur est survenue lors de la connexion");
      }
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="logo-login">
          <img src={logo} alt="logo Café Crème" />
        </div>
        <div className="card-login-container">
          <div className="card">
            <h2>Login</h2>
            <form>
              <input
                type="email"
                name="Mail"
                placeholder="monadresse@mail.com"
                required
                onChange={handleChange}
                value={utilisateur.Mail}
              />
              <input
                type="password"
                name="MotDePasse"
                placeholder="Mot de passe"
                // minlength="8" (validation côté client optionnelle)
                required
                onChange={handleChange}
                value={utilisateur.MotDePasse}
              />
              <button className="button-login" onClick={handleLogin}>Login</button>
            </form>
            <Link className="link-no-decoration" to="/register">
              <button className="button-login">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;