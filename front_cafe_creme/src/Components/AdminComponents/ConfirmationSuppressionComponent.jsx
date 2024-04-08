import React from "react";
import "../../Styles/UtilisateurStyles/ConfirmationStyle.scss";

const Confirmation = ({ isOpen, onClose, onConfirm, produit, children }) => {
    if (!isOpen) return null;
    return (
        <div className="container-confirmation">
            {children}
            <div className="confirmation-card">
                <h4>{produit.Nom}</h4>
                <p>Êtes-vous sûr de vouloir supprimer ce produit ?</p>
                <div className="confirmation-buttons">
                    <button className="button-confirmation" onClick={onConfirm}>Oui</button>
                    <button className="button-confirmation" onClick={onClose}>Non</button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;