import axios from '../Services/AxiosConfig';

const GetProduitByFormeId = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/forme/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération des produits`, error);
        throw error;
    }
};

export default {
    GetProduitByFormeId
};
