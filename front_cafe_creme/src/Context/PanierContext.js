import React, { createContext, useContext, useState } from 'react';

const PanierContext = createContext();
export const usePanier = () => useContext(PanierContext);

export const PanierProvider = ({ children }) => {
    const [panierItems, setPanierItems] = useState([]);

    const ajouterAuPanier = (produit) => {
        const existantIndex = panierItems.findIndex(item => item.PR_Id === produit.PR_Id);
        if (existantIndex > -1) {
            const newPanierItems = [...panierItems];
            newPanierItems[existantIndex].PU_Quantite += produit.PU_Quantite;
            setPanierItems(newPanierItems);
        } else {
            setPanierItems(currentItems => [...currentItems, produit]);
        }
    };

    const supprimerDuPanier = (PR_Id) => {
        setPanierItems(currentItems => currentItems.filter(item => item.PR_Id !== PR_Id));
    };

    const modifierQuantite = (PR_Id, quantite) => {
        setPanierItems(currentItems => currentItems.map(item => {
            if (item.PR_Id === PR_Id) {
                return { ...item, PU_Quantite: quantite };
            }
            return item;
        }));
    };

    const resetPanier = () => {
        setPanierItems([]);
    };

    return (
        <PanierContext.Provider value={{ panierItems, ajouterAuPanier, supprimerDuPanier, modifierQuantite, resetPanier }}>
            {children}
        </PanierContext.Provider>
    );
};