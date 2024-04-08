import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
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
import Login from "./Pages/UtilisateurPages/LoginPage";
import Register from "./Pages/UtilisateurPages/RegisterPage";
import Droits from "./Pages/DroitsPage"
import Profil from "./Pages/UtilisateurPages/ProfilPage";
import Panier from "./Pages/UtilisateurPages/PanierPage";
import Premiere from "./Pages/PremierePage"
// Styles
import 'react-toastify/dist/ReactToastify.css';
import './Styles/BaseStyles/TexteStyle.scss'
import ScrollToTop from "./Components/ScrollToTopComponent";
import './Styles/BaseStyles/HoverStyle.scss'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      setIsAuthenticated(true);
      setUser(user);
    }
  }, []);

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
              <Route path={"/login"} element={<Login />} />
              <Route path={"/register"} element={<Register />} />
              <Route path={"/politique"} element={<Droits />} />
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








// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React, { useState } from 'react';
// import AuthContext from '../src/Context/AuthContext';
// // Components
// import Header from "./Components/BodyComponents/HeaderComponent";
// import Footer from "./Components/BodyComponents/FooterComponent";
// // Pages
// import Accueil from "./Pages/AccueilPage";
// import ProduitDetail from "./Pages/ProduitPages/ProduitDetailPage";
// import NosCafes from "./Pages/ProduitPages/NosCafesPage";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState('');

//   return (
//     <>
//       <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
//         <BrowserRouter>
//           <Header />
//           <Routes>
//             <Route path={"/accueil"} element={<Accueil />} />
//             <Route path={"/produit/:id"} element={<ProduitDetail />} />
//             <Route path={"/noscafes"} element={<NosCafes />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       </AuthContext.Provider>
//     </>
//   );
// }

// export default App;
