import axios from '../Services/AxiosConfig';

function GetPanierById(id_utilisateur) {
    return axios.get(`${process.env.REACT_APP_API_URL}/panier/` + id_utilisateur);
}

function SubmitPanier(produit) {
    return axios.post(`${process.env.REACT_APP_API_URL}/panier`, produit);
}

function DeletePanier(id_panier) {
    return axios.delete(`${process.env.REACT_APP_API_URL}/panier/` + id_panier);
}

function UpdateQuantite(id_panier, nouvelleQuantite) {
    const url = `${process.env.REACT_APP_API_URL}/panier/${id_panier}/quantite`;
    const data = {
        quantite: nouvelleQuantite
    };
    return axios.put(url, data);
}

export default {
    GetPanierById,
    SubmitPanier,
    DeletePanier,
    UpdateQuantite
}