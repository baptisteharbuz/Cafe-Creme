import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";
import "../../Styles/UtilisateurStyles/ProfilStyle.scss";
import { usePanier } from "../../Context/PanierContext";
import LoginService from "../../Services/LoginService";
import Confirmation from "../../Components/UtilisateurComponents/ConfirmationComponent";
import Rain from "../../Components/GrainComponent";
import VerifyPasswordModal from "../../Components/UtilisateurComponents/PasswordVerificationComponent";
import ChangePasswordModal from "../../Components/UtilisateurComponents/ChangePasswordComponent";

const Profil = () => {
  const { setIsAuthenticated, user, setUser } = useContext(AuthContext);
  // Gestion du panier
  const { resetPanier } = usePanier();
  // Navigation
  const navigate = useNavigate();
  // État local pour les modifications d'un utilisateur
  const [utilisateur, setUtilisateur] = useState({ ...user, actualPassword: "" });
  // État des modales
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPasswordVerification, setShowPasswordVerification] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  // Variables pour les champs du formulaire
  const [nom, setNom] = useState(user.UT_Nom || "");
  const [prenom, setPrenom] = useState(user.UT_Prenom || "");
  const [mail, setMail] = useState(user.UT_Mail || "");


  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur(prevState => ({ ...prevState, [name]: value }));
  };

  const handleModification = async (e) => {
    e.preventDefault();

    if (utilisateur.actualPassword === '') {
      toast.error("Veuillez entrer votre mot de passe actuel pour confirmer les modifications.");
      return;
    }

    // Hachage du mot de passe avant l'envoi
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(utilisateur.actualPassword, salt);
    setUtilisateur(prevState => ({ ...prevState, actualPassword: hashedPassword }));

    if (utilisateur.actualPassword !== user.UT_MotDePasse) {
      toast.error("Mot de passe incorrect.");
      return;
    }
    const userData = {
      Nom: nom,
      Prenom: prenom,
      Mail: mail,
    };
    try {
      await LoginService.modifierUtilisateur(user.UT_Id, userData);
      toast.success("Votre profil a bien été modifié.");

      setUser(prevUser => ({
        ...prevUser,
        UT_Nom: nom,
        UT_Prenom: prenom,
        UT_Mail: mail
      }));

    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Votre session a expiré. Veuillez vous reconnecter.");
      } else {
        toast.error(`Erreur lors de la modification de votre profil: ${error.message}`);
      }
    }
  };

  const handleDeconnexion = () => {
    setIsAuthenticated(false);
    resetPanier();
    navigate("/login");
  };

  const handleSuppression = async () => {
    setShowConfirmation(true);
  };

  const confirmSuppression = async () => {
    try {
      await LoginService.deleteUtilisateur(user.UT_Id);
      toast.success(`${user.UT_Nom} Votre profil a bien été supprimé`);
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      toast.error("Erreur lors de la suppression du profil.");
    }
  };

  const handlePasswordChange = async (nouveauMotDePasse) => {
    try {
      await LoginService.modifierMotDePasse(user.UT_Id, nouveauMotDePasse);
      toast.success("Mot de passe changé avec succès.");
      setShowChangePasswordModal(false);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Votre session a expiré. Veuillez vous reconnecter.");
      } else {
        toast.error(`Erreur lors du changement de mot de passe: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    setNom(user.UT_Nom);
    setPrenom(user.UT_Prenom);
    setMail(user.UT_Mail);
  }, [user]);

  return (
    <>
      <div className="container-profil">
        <h1 className="bonjour-profil">Bonjour {user.UT_Prenom}</h1>
        <div id="card" className="containeur-card-profil">
          <div className="logo-background"></div>
          <div className="card-profil">
            <h3>Mon profil</h3>
            <form onSubmit={handleModification}>
              <input type="text" id="nom" name="Nom" required onChange={(e) => setNom(e.target.value)} value={nom} />
              <input type="text" id="prenom" name="Prenom" required onChange={(e) => setPrenom(e.target.value)} value={prenom} />
              <input type="email" id="email" name="Mail" required onChange={(e) => setMail(e.target.value)} value={mail} />
              <input type="password" id="password" name="actualPassword" placeholder="Mot de passe actuel" onChange={handleChange} value={utilisateur.actualPassword} />
              <button type="submit" >Valider les changements</button>
            </form>
            <button className="button-password-change" onClick={() => setShowPasswordVerification(true)}>Changer de mot de passe</button>
          </div>
        </div>

        <div className="button-profil">
          <button onClick={handleDeconnexion}>Se déconnecter</button>
          <button onClick={handleSuppression}>Supprimer mon compte</button>
          <Confirmation isOpen={showConfirmation} onClose={() => setShowConfirmation(false)} onConfirm={confirmSuppression} user={user}>
            <Rain count={150} />
          </Confirmation>
        </div>
      </div>
      <VerifyPasswordModal isOpen={showPasswordVerification} onClose={() => setShowPasswordVerification(false)} onConfirm={() => setShowChangePasswordModal(true)} user={user} />
      <ChangePasswordModal isOpen={showChangePasswordModal} onClose={() => setShowChangePasswordModal(false)} onConfirm={handlePasswordChange} />
    </>
  );
};

export default Profil;
