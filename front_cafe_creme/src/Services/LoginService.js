import axios from '../Services/AxiosConfig';

const fetchUtilisateurById = (id_utilisateur) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/utilisateur/${id_utilisateur}`);
};

const register = async (utilisateur) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/utilisateur/register`, utilisateur);
    return { data: response.data, error: null };
  } catch (error) {
    console.error('Erreur lors de l’ajout d’un utilisateur', error);
    return { data: null, error: error.response };
  }
};


const login = async (utilisateur) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/utilisateur/login`, utilisateur);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
  return axios.post(`${process.env.REACT_APP_API_URL}/utilisateur/logout`);
};

const deleteUtilisateur = async (id_utilisateur) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/utilisateur/${id_utilisateur}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression de l’utilisateur', error);
    throw error;
  }
};

const modifierUtilisateur = async (id_utilisateur, userData, actualPassword) => {
  try {
    const body = {
      ...userData,
      motDePasseActuel: actualPassword,
    };
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/utilisateur/modification/${id_utilisateur}`, body);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la modification de l’utilisateur', error);
    throw error;
  }
};

const modifierMotDePasse = async (id_utilisateur, nouveauMotDePasse) => {
  try {
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/utilisateur/changerMotDePasse/${id_utilisateur}`, {
      nouveauMotDePasse
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la modification du mot de passe', error);
    throw error;
  }
};

export default {
  fetchUtilisateurById,
  register,
  login,
  logout,
  deleteUtilisateur,
  modifierUtilisateur,
  modifierMotDePasse
};
