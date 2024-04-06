import React, { useEffect, useState } from "react";
// Components
import CafeTestAromes from "../../Components/CafeTestComponents/CafeTestAromesComponent";
import CafeTestSaveurs from "../../Components/CafeTestComponents/CafeTestSaveursComponent";
import CafeTestIntensites from "../../Components/CafeTestComponents/CafeTestIntensitesComponent";
import CafeTestFormes from "../../Components/CafeTestComponents/CafeTestFormesComponent";
// Services
import ProduitService from "../../Services/ProduitService";
// Style
import "../../Styles/ProduitStyles/CafeTestStyle.scss";
import ProduitListComponent from "../../Components/ProduitsComponents/ProduitListComponent";

const CafeTest = () => {
  const [cafe, setCafe] = useState();
  const [index, setIndex] = useState(0);
  const [resultat, setResultat] = useState([]);

  const SubmitCafeTest = async () => {
    try {
      const response = await ProduitService.SubmitCafeTest(cafe);
      setResultat(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (index == 4) {
      SubmitCafeTest();
    }
  }, [index]);

  return (
    <>
      <div className="contaiter-cafe-test">
        <div className="content-cafe-test">
          {index == 0 && (
            <>
              <CafeTestAromes
                setCafe={setCafe}
                cafe={cafe}
                setIndex={setIndex}
                index={index}
              />
            </>
          )}
          {index == 1 && (
            <>
              <CafeTestSaveurs
                setCafe={setCafe}
                cafe={cafe}
                setIndex={setIndex}
                index={index}
              />
            </>
          )}
          {index == 2 && (
            <>
              <CafeTestIntensites
                setCafe={setCafe}
                cafe={cafe}
                setIndex={setIndex}
                index={index}
              />
            </>
          )}
          {index == 3 && (
            <>
              <CafeTestFormes
                setCafe={setCafe}
                cafe={cafe}
                setIndex={setIndex}
                index={index}
              />
            </>
          )}
          {index == 4 && (
            <div>
              <>
                <h1 className="h1-cafe-test">CAFÉS RECOMMANDÉS</h1>
                <div className="resultat-cafe-test">
                  {resultat.map((cafe) => {
                    return (
                      <>
                        <ProduitListComponent
                          Arome={cafe.Arome}
                          Id={cafe.Id}
                          Image={cafe.Image}
                          Pays={cafe.Pays}
                          Prix={cafe.Prix}
                          Produit={cafe.Produit}
                          Saveur={cafe.Saveur}
                        />
                      </>
                    );
                  })}
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CafeTest;
