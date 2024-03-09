import React, { useEffect, useState } from "react";
import ProduitService from "../../Services/ProduitService";
import ProduitListComponent from "../../Components/ProduitsComponents/ProduitListComponent";
import "../../Styles/ProduitStyles/ProduitListStyle.scss";
import { useParams } from "react-router-dom";
import AjouterProduitComponent from "../../Components/AdminComponents/AjouterProduitComponent";

const Cafe = () => {
  const [produitList, setProduitList] = useState([]);
  const { format } = useParams();
  const [produit, setProduit] = useState([]);
  const [isAjouterModalOpen, setIsAjouterModalOpen] = useState(false);

  const fetchProduit = async () => {
    try {
      const response = await ProduitService.GetProduit();
      if (format != undefined) {
        let res = response.data.filter((pr) => pr.Forme == format);
        setProduitList(res);
      } else {
        setProduitList(response.data);
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
        <div className="button-nos-cafes-container"><button onClick={() => setIsAjouterModalOpen(true)}>Ajouter un nouveau produit</button></div>
        <div className="container-filtre-produit">
          <div className="container-produit-list">
            {produitList.map((produit) => {
              return (
                <ProduitListComponent
                  key={produit.id}
                  {...produit}
                />
              );
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
