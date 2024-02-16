import axios from 'axios';

function GetProduit() {
    return axios.get(`http://127.0.0.1:3000/produit/`);
}

function GetNewProduit() {
    return axios.get(`http://127.0.0.1:3000/produit/nouveau`);
}

function GetProduitById(id) {
    return axios.get(`http://127.0.0.1:3000/produit/` + id);
}
function GetCafeResultat() {
    return axios.get(`http://127.0.0.1:3000/cafetest/`);
}
function SubmitCafeTest(cafe) {
    return axios.post(`http://127.0.0.1:3000/cafetest/`, cafe);
}

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
    GetProduit,
    GetNewProduit,
    GetProduitById,
    GetCafeResultat,
    SubmitCafeTest
    // GetTotal
}