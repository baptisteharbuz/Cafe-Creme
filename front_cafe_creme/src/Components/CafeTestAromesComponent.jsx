import React from "react";

const Aromes = ({ setCafe, cafe, index, setIndex }) => {
  return (
    <>
      <h1 className="h1-cafe-test">ARÔMES</h1>
      <div className="container-choix">
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, arome: "Gourmands" });
            setIndex(index + 1);
          }}
        >
          Gourmands
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, arome: "Fruités & Naturels" });
            setIndex(index + 1);
          }}
        >
          Fruités & Naturels
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, arome: "Terreux & Épicés" });
            setIndex(index + 1);
          }}
        >
          Terreux & Épicés
        </button>
      </div>
      <p>
        L'arôme se réfère à l'odeur ou au parfum d'une substance. Dans le
        contexte du café, cela englobe les odeurs que l'on perçoit lorsque le
        café est moulu, infusé ou dégusté. Les arômes de café peuvent être
        variés, allant de notes florales et fruitées à des nuances plus
        terreuses, boisées ou épicées. Lorsque l'on parle d'arômes de café, on
        se réfère généralement à l'expérience olfactive, à ce que l'on sent avec
        le nez.
      </p>
    </>
  );
};

export default Aromes;
