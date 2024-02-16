import axios from 'axios';

function getProduits() {
    return axios.get(`http://127.0.0.1:3000/produit/`);
}

function getProduitById(id) {
    return axios.get(`http://127.0.0.1:3000/produit/${id}`);
}

function ajouterProduit(produit) {
    return axios.post(`http://127.0.0.1:3000/produit/`, produit);
}

function modifierProduit(id, produit) {
    return axios.put(`http://127.0.0.1:3000/produit/${id}`, produit);
}

function supprimerProduit(id) {
    return axios.delete(`http://127.0.0.1:3000/produit/${id}`);
}

export default {
    getProduits,
    getProduitById,
    ajouterProduit,
    modifierProduit,
    supprimerProduit
};
