import React, { useEffect, useState } from "react";
import Produitservice from "../Services/ProduitService";
import ProduitListComponent from "../Components/ProduitListComponent";

import "../Styles/ProduitListStyle.scss";
import { useParams } from "react-router-dom";

const Cafe = () => {
  const [produitList, setProduitList] = useState([]);
  const { format } = useParams();

  const fetchProduit = async () => {
    try {
      const response = await Produitservice.GetProduit();
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
        <div className="titre">
          <h1>Nos Cafés</h1>
          <div className="container-filtre-produit">
            <div className="container-filtre">
              <h4>Filtre</h4>
              <div className="line-filtre"></div>
              <form className="filtres">
                <div className="container-pays">
                  <h5>Pays</h5>
                </div>
                <div className="container-saveurs">
                  <h5>Saveurs</h5>
                </div>
                <div className="container-aromes">
                  <h5>Aromes</h5>
                </div>
                <div className="container-intensite">
                  <h5>Intensité</h5>
                </div>
                <div className="container-bio">
                  <h5>Bio</h5>
                </div>
              </form>
            </div>
            <div className="container-produit-list">
              {produitList.map((produit) => {
                return <ProduitListComponent key={produit.id} {...produit} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cafe;
