// import React, { useEffect, useState } from "react";
// import Formeservice from "../Services/formeService";
// import ProduitListComponent from "../Components/ProduitListComponent";

// const CafeList = () => {
//   const [produitList, setProduitList] = useState([]);

//   const fetchProduitByFormeId = async () => {
//     try {
//       const response = await Formeservice.GetProduitByFormeId();
//       setProduitList(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   useEffect(() => {
//     fetchProduitByFormeId();
//   }, []);

//   return (
//     <>
//       <div className="titre">
//         <h1>Café Moulu</h1>
//       </div>
//       {produitList.map((id) => {
//         return <ProduitListComponent key={id} />;
//       })}
//     </>
//   );
// };

// export default CafeList;
