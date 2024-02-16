import React from "react";

const Saveurs = ({ setCafe, cafe, index, setIndex }) => {
  return (
    <>
      <h1 className="h1-cafe-test">Saveurs</h1>
      <div className="container-choix">
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, saveur: "Intenses" });
            setIndex(index + 1);
          }}
        >
          Intenses
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, saveur: "Sucrées" });
            setIndex(index + 1);
          }}
        >
          Sucrées
        </button>
        <button
          className="button-choix"
          onClick={() => {
            setCafe({ ...cafe, saveur: "Exotiques" });
            setIndex(index + 1);
          }}
        >
          Exotiques
        </button>
      </div>
      <p>
        La saveur se réfère au goût perçu par les papilles gustatives sur la
        langue. C'est ce que l'on ressent lorsqu'on prend une gorgée de café.
        Les saveurs du café incluent des éléments tels que le goût sucré, acide,
        amer, salé et umami. Dans le café, on peut également décrire des saveurs
        spécifiques comme le chocolat, la noisette, le fruité, etc. Lorsque l'on
        parle de saveurs de café, on se réfère à l'expérience gustative, à ce
        que l'on goûte réellement.
      </p>
    </>
  );
};

export default Saveurs;
