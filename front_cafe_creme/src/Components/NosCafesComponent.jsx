import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Produitservice from "../Services/ProduitService";
// Images
import CafeMoulu from "../Assets/Images/Moulu/Colombian - Colombian Carnival (moulu).png";
import Capsule from "../Assets/Images/Capsule/Brasilian - Amazon Rainforest Roast (Capsule).png";
import CafeGrain from "../Assets/Images/Grains/2-cafés-grains.png";
// Style
import "../Styles/NosCafesStyle.css";

const NosCafe = () => {
  //   const [produit, setProduit] = useState({});

  //   useEffect(() => {
  //     const fetchNewProduit = async () => {
  //       try {
  //         const response = await Produitservice.GetNewProduit();
  //         setProduit(response.data[0]);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     };

  //     fetchNewProduit();
  //   }, []);

  return (
    <>
      <Link to="/cafemoulu">
        <div className="nos-cafes">
          <img src={CafeMoulu} alt="Café Moulu" />
          <h3>Café Moulu</h3>
          <button>Découvrir</button>
        </div>
      </Link>
      <Link to="/capsule">
        <div className="nos-cafes">
          <img src={Capsule} alt="Capsule" />
          <h3>Capsule</h3>
          <button>Découvrir</button>
        </div>
      </Link>
      <Link to="/cafegrain">
        <div className="nos-cafes">
          <img src={CafeGrain} alt="Café en grain" />
          <h3>Café en grain</h3>
          <button>Découvrir</button>
        </div>
      </Link>
    </>
  );
};

export default NosCafe;
