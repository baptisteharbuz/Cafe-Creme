import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// STYLE
import "../Styles/LoginStyle.scss";
// IMAGES
import logo from "../Assets/Images/Logos/Logo-café-crème-beige.svg";
// CONTEXT
import AuthContext from "../Context/AuthContext";
// SERVICE
import LoginService from "../Services/LoginService";

const Login = () => {
  const [utilisateur, setUtilisateur] = useState({
    Mail: "",
    MotDePasse: "",
  });
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser, user } = useContext(AuthContext);


  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await LoginService.login(utilisateur);

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUser(response.data.user);
        if (response.data.user.UT_IsAdmin) {
          toast.success(`Bonjour Administrateur ${response.data.user.UT_Nom} !`);
          navigate("/admin");
        } else {
          toast.success(`Bonjour ${response.data.user.UT_Nom} !`);
          navigate("/accueil");
        }
      }
    } catch (error) {
      console.error("Échec de la connexion", error);
      toast.error("Identification échouée");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="logo-login">
          <img src={logo} alt="logo Café Crème" />
        </div>
        <div className="card-connexion-container">
        <div className="logo-background"></div>
          <div className="card">
            <h2>Connexion</h2>
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
                // minlength="8"
                required
                onChange={handleChange}
                value={utilisateur.MotDePasse}
              />
              <button className="button-login" onClick={handleLogin}>Connexion</button>
            </form>
            <Link className="link-no-decoration" to="/inscription">
              <button className="button-login">Inscription</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
