import React from "react";
import "../Styles/ConfirmationStyle.scss";

const Confirmation = ({ isOpen, onClose, onConfirm, user, children }) => {
  if (!isOpen) return null;
  return (
    <div className="container-confirmation">
      {children}
      <div className="confirmation-card">
        <h4>{user.UT_Nom}</h4>
        <p>Êtes-vous sûr de vouloir supprimer votre compte ?</p>
        <div className="confirmation-buttons">
          <button className="button-confirmation" onClick={onConfirm}>Oui</button>
          <button className="button-confirmation" onClick={onClose}>Non</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;