import axios from 'axios';

// function fetchUtilisateur() {
//   return axios.get("http://127.0.0.1:3000/utilisateur");
// }

function fetchUtilisateurById(id_utilisateur) {
  return axios.get(`http://127.0.0.1:3000/utilisateur/${id_utilisateur}`);
}

function addUtilisateur(utilisateur, recaptchaToken) {
  const payload = {
    ...utilisateur,
    recaptchaToken: recaptchaToken
  };
  return axios.post("http://127.0.0.1:3000/utilisateur/inscription", payload, {
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
  return axios.put(`http://127.0.0.1:3000/utilisateur/modification/${id_utilisateur}`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  })

  // .then(response => response.data)
  // .catch(error => {
  //   console.error('Erreur lors de la modification de l’utilisateur', error);
  //   throw error;
  // });
}

function modifierMotDePasse(id_utilisateur, nouveauMotDePasse) {
  return axios.put(`http://127.0.0.1:3000/utilisateur/changerMotDePasse/${id_utilisateur}`, {
    nouveauMotDePasse: nouveauMotDePasse
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Erreur lors de la modification du mot de passe de l’utilisateur', error);
      throw error;
    });
}



export default {
  // fetchUtilisateur,
  fetchUtilisateurById,
  addUtilisateur,
  login,
  logout,
  deleteUtilisateur,
  modifierUtilisateur,
  modifierMotDePasse
};