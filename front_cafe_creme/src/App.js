import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
// Components

// Pages
import Accueil from "./Pages/AccueilPage";
import ProduitDetail from "./Pages/ProduitDetailPage";
// import CafeGrain from "./Pages/CafeGrainPage";
// import CafeMoulu from "./Pages/CafeMouluPage";
// import Capsule from "./Pages/CapsulePage";
// Styles


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Accueil />} />
          <Route path={"/produit/:id"} element={<ProduitDetail />} />
          {/* <Route path={"/forme"} element={<CafeGrain />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
