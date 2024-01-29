import axios from 'axios';

function GetNewProduit() {
    return axios.get(`http://127.0.0.1:3000/produit/`);
}
function GetProduitById(id) {
    return axios.get(`http://127.0.0.1:3000/produit/` + id);
}

// function SubmitReservation(reservationData) {
//     return axios.post(`http://127.0.0.1:3000/panier`, reservationData);
// }

// function GetSalleByReservation(reservationData) {
//     return axios.get(`http://127.0.0.1:3000/salle`, reservationData);
// }

// function DeletePanier(id_salle) {
//     return axios.delete(`http://127.0.0.1:3000/panier/` + id_salle);
// }

// function GetTotal(id_utilisateur) {
//     return axios.get(`http://127.0.0.1:3000/panier/total/` + id_utilisateur);
// }
export default {
    GetNewProduit,
    GetProduitById
    // DeletePanier,
    // GetTotal
}