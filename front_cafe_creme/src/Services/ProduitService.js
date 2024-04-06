import axios from '../Services/AxiosConfig';


const GetProduit = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/produit/`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des produits', error);
        throw error;
    }
};


const GetNewProduit = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/produit/nouveau`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des nouveaux produits', error);
        throw error;
    }
};

const GetProduitById = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/produit/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du produit ${id}`, error);
        throw error;
    }
};

const GetCafeResultat = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cafetest/`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des résultats du test café', error);
        throw error;
    }
};

const SubmitCafeTest = async (cafe) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/cafetest/`, cafe);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la soumission du test café', error);
        throw error;
    }
};

const GetAromes = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/aromes`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des arômes', error);
        throw error;
    }
};

const GetSaveurs = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/saveurs`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des saveurs', error);
        throw error;
    }
};

export default {
    GetProduit,
    GetNewProduit,
    GetProduitById,
    GetCafeResultat,
    SubmitCafeTest,
    GetAromes,
    GetSaveurs
};
