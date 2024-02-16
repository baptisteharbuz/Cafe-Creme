import React from "react";

const Formes = ({ setCafe, cafe, index, setIndex }) => {
  return (
    <>
      <h1 className="h1-cafe-test">FORMES DE CAFÉ</h1>
      <div className="container-choix">
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, forme: "Café en grains" });
            setIndex(index + 1);
          }}
        >
          Café en grains
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, forme: "Café moulu" });
            setIndex(index + 1);
          }}
        >
          Café moulu
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, forme: "Capsule" });
            setIndex(index + 1);
          }}
        >
          Capsule
        </button>
      </div>
    </>
  );
};

export default Formes;
