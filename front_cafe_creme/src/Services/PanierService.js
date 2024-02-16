import axios from 'axios';

function GetPanierById(id_utilisateur) {
    return axios.get(`http://127.0.0.1:3000/panier/` + id_utilisateur);
}

function SubmitPanier(produit) {
    return axios.post(`http://127.0.0.1:3000/panier`, produit);
}

function DeletePanier(id_panier) {
    return axios.delete(`http://127.0.0.1:3000/panier/` + id_panier);
}

function UpdateQuantite(id_panier, nouvelleQuantite) {
    const url = `http://127.0.0.1:3000/panier/${id_panier}/quantite`;
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