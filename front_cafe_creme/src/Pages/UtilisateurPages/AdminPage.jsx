// import React, { useState, useEffect } from "react";
// import AdminService from "../Services/AdminService";
// import AdminComponent from "../Components/AdminMenuComponent";

// const AdminPage = () => {
//   const [produits, setProduits] = useState([]);
//   const [produitActuel, setProduitActuel] = useState(null);

//   useEffect(() => {
//     refreshProduits();
//   }, []);

//   const refreshProduits = async () => {
//     const response = await AdminService.getProduits();
//     setProduits(response.data);
//   };

//   const handleDelete = async (id) => {
//     await AdminService.supprimerProduit(id);
//     refreshProduits();
//   };

//   const handleEdit = (produit) => {
//     setProduitActuel(produit);
//   };

//   return (
//     <div>
//       <h1>Page d'Administration</h1>
//       <AdminComponent
//         produit={produitActuel}
//         refreshProduits={refreshProduits}
//       />
//       {/* Liste des produits ici */}
//       {produits.map((produit) => (
//         <div key={produit.id}>
//           {/* Affichez les détails du produit */}
//           <button onClick={() => handleEdit(produit)}>Modifier</button>
//           <button onClick={() => handleDelete(produit.id)}>Supprimer</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminPage;


