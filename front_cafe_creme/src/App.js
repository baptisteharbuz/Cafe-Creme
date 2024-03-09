import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AuthContext from '../src/Context/AuthContext';
import { PanierProvider } from './Context/PanierContext';
// Components
import Header from "./Components/BodyComponents/HeaderComponent";
import Footer from "./Components/BodyComponents/FooterComponent";
// Pages
import Accueil from "./Pages/AccueilPage";
import ProduitDetail from "./Pages/ProduitPages/ProduitDetailPage";
import NosCafes from "./Pages/ProduitPages/NosCafesPage";
import CafeTest from "./Pages/ProduitPages/CafeTestPage"
import Connexion from "./Pages/UtilisateurPages/ConnexionPage";
import Inscription from "./Pages/UtilisateurPages/InscriptionPage";
// import Admin from "./Pages/AdminPage";
import Profil from "./Pages/UtilisateurPages/ProfilPage";
import Panier from "./Pages/UtilisateurPages/PanierPage";
import Premiere from "./Pages/PremierePage"
// import CafeMoulu from "./Pages/CafeMouluPage";
// import Capsule from "./Pages/CapsulePage";
// Styles
import 'react-toastify/dist/ReactToastify.css';
import './Styles/BaseStyles/TexteStyle.scss'
import ScrollToTop from "./Components/ScrollToTopComponent";
import './Styles/BaseStyles/HoverStyle.scss'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
        <PanierProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path={"/"} element={<Premiere />} />
              <Route path={"/accueil"} element={<Accueil />} />
              <Route path={"/produit/:id"} element={<ProduitDetail />} />
              <Route path={"/noscafes"} element={<NosCafes />} />
              <Route path={"/noscafes/:format"} element={<NosCafes />} />
              <Route path={"/cafetest"} element={<CafeTest />} />
              <Route path={"/connexion"} element={<Connexion />} />
              <Route path={"/inscription"} element={<Inscription />} />
              {/* <Route path={"/admin"} element={<Admin />} /> */}
              <Route path={"/profil"} element={<Profil />} />
              <Route path={"/panier"} element={<Panier />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PanierProvider>
      </AuthContext.Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
