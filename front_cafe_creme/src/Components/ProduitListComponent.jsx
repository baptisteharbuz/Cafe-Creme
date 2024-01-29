import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Service
// import FormeService from "../Services/FormeService";
// Style
import "../Styles/ProduitListStyle.css";

const Salle = () => {
  const [produit, setProduit] = useState([]);

  useEffect(() => {
    const fetchFormeDetail = async () => {
      try {
        const response = await FormeService.GetProduitByFormeId();
        setProduit(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchFormeDetail();
  }, []);

  return (
    <>
      <div className="card-produit">
        <Link to={`/produit/${produit.Id}`}>
          <h2>{produit.Pays}</h2>
          <h2>{produit.Produit}</h2>
          <h2>
            {produit.Arome} & {produit.Saveur}
          </h2>
          <h2>{produit.Prix}</h2>
        </Link>
      </div>
    </>
  );
};

export default Salle;
