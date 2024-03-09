import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as feather from 'feather-icons';
// STYLES
import "../../Styles/UtilisateurStyles/LoginStyle.scss";

// IMAGES
import logo from "../../Assets/Images/Logos/Logo-café-crème-beige.svg";

// CONTEXT
import AuthContext from "../../Context/AuthContext";

// SERVICE (suppose que `LoginService` a une méthode `login` qui accepte un mot de passe haché)
import LoginService from "../../Services/LoginService";

// // Importer la bibliothèque de hachage (ex: bcrypt)
// import bcrypt from "bcryptjs";

const Login = () => {
  const [utilisateur, setUtilisateur] = useState({
    Mail: "",
    MotDePasse: "",
  });
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useContext(AuthContext);

  const eyeRef = useRef(null);
  const eyeoffRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Hacher le mot de passe avant de l'envoyer au serveur
      // const salt = bcrypt.genSaltSync(10);
      // const hashedPassword = await bcrypt.hash(utilisateur.MotDePasse, salt);

      const response = await LoginService.login({
        Mail: utilisateur.Mail,
        MotDePasse: utilisateur.MotDePasse,
      });
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
      } else {
        toast.error(response.data.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Échec de la connexion", error);
      toast.error("Identification échouée");
    }
  };

  const togglePasswordVisibility = () => {
    const isVisible = eyeRef.current.style.display !== "none";
    eyeRef.current.style.display = isVisible ? "none" : "block";
    eyeoffRef.current.style.display = isVisible ? "block" : "none";
    passwordInputRef.current.type = isVisible ? "text" : "password";
  };


  return (
    <>
      <div className="login-container">
        <div className="logo-login">
          <img src={logo} alt="logo Café Crème" />
        </div>
        <div className="card-connexion-container">
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
                // minlength="8" (validation côté client optionnelle)
                required
                onChange={handleChange}
                value={utilisateur.MotDePasse}
              />
              <div className="password-container">
                <input
                  ref={passwordInputRef}
                  type="password"
                  name="MotDePasse"
                  placeholder="Mot de passe"
                  required
                  onChange={handleChange}
                  value={utilisateur.MotDePasse}
                />
                <i ref={eyeRef} className="feather-eye" onClick={togglePasswordVisibility}></i>
                <i ref={eyeoffRef} className="feather-eye-off" onClick={togglePasswordVisibility}></i>
              </div>
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

<script>
  feather.replace();
</script>