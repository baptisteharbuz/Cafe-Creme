import React, { useEffect, useState, useContext } from "react";
import ProduitService from "../../Services/ProduitService";
import ProduitListComponent from "../../Components/ProduitsComponents/ProduitListComponent";
import "../../Styles/ProduitStyles/ProduitListStyle.scss";
import { useParams } from "react-router-dom";
import AjouterProduitComponent from "../../Components/AdminComponents/AjouterProduitComponent";
import AuthContext from "../../Context/AuthContext";

const Cafe = () => {
  const [produitList, setProduitList] = useState([]);
  const { format } = useParams();
  const [produit, setProduit] = useState([]);
  const [isAjouterModalOpen, setIsAjouterModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(user.UT_IsAdmin);


  const fetchProduit = async () => {
    try {
      const response = await ProduitService.GetProduit();
      if (format != undefined) {
        let res = response.filter((pr) => pr.Forme == format);
        setProduitList(res);
      } else {
        setProduitList(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProduit();
  }, []);


  return (
    <>
      <div className="container-nos-cafes">
        <div className="container-title-nos-cafes">
          <h1>Nos Cafés</h1>
          {/* <button>Ajouter un nouveau produit</button> */}
        </div>
        {isAdmin && (
          <div className="button-nos-cafes-container">
            <button onClick={() => setIsAjouterModalOpen(true)}>Ajouter un nouveau produit</button>
          </div>
        )}
        <div className="container-filtre-produit">
          <div className="container-produit-list">
            {produitList.map((produit, index) => {
              return (
                <ProduitListComponent
                  key={index}
                  {...produit} />);
            })}
          </div>
        </div>
      </div >
      {isAjouterModalOpen && (
        <AjouterProduitComponent
          isOpen={isAjouterModalOpen}
          onClose={() => setIsAjouterModalOpen(false)}
          produit={produit}
        />
      )}
    </>
  );
};

export default Cafe;




// import React, { useEffect, useState } from "react";
// import ProduitService from "../../Services/ProduitService";
// import ProduitListComponent from "../../Components/ProduitsComponents/ProduitListComponent";
// import "../../Styles/ProduitStyles/ProduitListStyle.scss";

// const Cafe = () => {
//   const [produitList, setProduitList] = useState([]);
//   const [produit, setProduit] = useState([]);

//   const fetchProduit = async () => {
//     try {
//       const response = await ProduitService.GetProduit();
//         setProduitList(response);
//       } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchProduit();
//   }, []);

//   return (
//     <>
//       <div className="container-nos-cafes">
//           <div className="container-produit-list">
//             {produitList.map((produit, index) => {
//               return (
//                 <ProduitListComponent
//                   key={index}
//                   {...produit} />);
//             })}
//           </div>
//         </div>
//     </>
//   );
// };

// export default Cafe;
