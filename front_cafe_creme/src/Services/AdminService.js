import axios from '../Services/AxiosConfig';

const ajouterProduit = async (produit) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/`, produit);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l’ajout du produit', error);
        throw error;
    }
};

const modifierProduit = async (id, produit) => {
    try {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/${id}`, produit);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la modification du produit', error);
        throw error;
    }
};

const supprimerProduit = async (id) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression du produit', error);
        throw error;
    }
};

export default {
    ajouterProduit,
    modifierProduit,
    supprimerProduit
};
