import React from "react";

const Intensite = ({ setCafe, cafe, index, setIndex }) => {
  return (
    <>
      <h1 className="h1-cafe-test">INTENSITÉ</h1>
      <div className="container-choix">
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, intensite: "Légère à moyenne" });
            setIndex(index + 1);
          }}
        >
          Légère à moyenne
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, intensite: "Forte" });
            setIndex(index + 1);
          }}
        >
          Forte
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, intensite: "Trés forte à extra forte" });
            setIndex(index + 1);
          }}
        >
          Trés forte à extra forte
        </button>
      </div>
    </>
  );
};

export default Intensite;
