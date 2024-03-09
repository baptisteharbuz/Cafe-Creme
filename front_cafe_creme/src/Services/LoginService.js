import axios from 'axios';
import bcrypt from "bcryptjs";

function fetchUtilisateurById(id_utilisateur) {
  return axios.get(`http://127.0.0.1:3000/utilisateur/${id_utilisateur}`);
}

function addUtilisateur(utilisateur) {
  return axios.post("http://127.0.0.1:3000/utilisateur/inscription", utilisateur, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function login(utilisateur) {
  return axios.post("http://127.0.0.1:3000/utilisateur/", utilisateur, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function logout() {
  return axios.post("http://127.0.0.1:3000/utilisateur/logout")
    .then(response => response.data)
    .catch(error => {
      console.error('Erreur lors de la déconnexion', error);
      throw error;
    });
}

function deleteUtilisateur(id_utilisateur) {
  return axios.delete(`http://127.0.0.1:3000/utilisateur/${id_utilisateur}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Erreur lors de la suppression de l’utilisateur', error);
      throw error;
    });
}

function modifierUtilisateur(id_utilisateur, userData) {
  const salt = bcrypt.genSaltSync(10);
  // Hachage du nouveau mot de passe s'il est présent
  if (userData.hasOwnProperty("MotDePasse")) {

    userData.MotDePasse = bcrypt.hash(userData.MotDePasse, salt);
  }

  return axios.put(`http://127.0.0.1:3000/utilisateur/modification/${id_utilisateur}`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function modifierMotDePasse(id_utilisateur, nouveauMotDePasse) {
  // Hachage du nouveau mot de passe
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hash(nouveauMotDePasse, salt);

  return axios.put(`http://127.0.0.1:3000/utilisateur/changerMotDePasse/${id_utilisateur}`, {
    nouveauMotDePasse: hashedPassword
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Erreur lors de la modification du mot de passe de l’utilisateur', error);
      throw error;
    });
}

export default {
  fetchUtilisateurById,
  addUtilisateur,
  login,
  logout,
  deleteUtilisateur,
  modifierUtilisateur,
  modifierMotDePasse
};
