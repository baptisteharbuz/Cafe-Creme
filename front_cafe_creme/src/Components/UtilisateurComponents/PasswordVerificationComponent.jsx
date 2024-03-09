import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import "../../Styles/UtilisateurStyles/PasswordStyle.scss";
import { toast } from "react-toastify";

const VerifyPasswordModal = ({ isOpen, onClose, onConfirm, user }) => {
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const verifyPassword = async () => {
        // Hachage du mot de passe saisi pour comparaison
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (hashedPassword === user.UT_MotDePasse) {
            onConfirm();
        } else {
            toast.error("Mot de passe incorrect.");
        }
        onClose();
    };

    return (
        <div className="container-password-change">
            <div className="confirmation-card">
                <h4>Vérifiez votre mot de passe actuel pour pouvoir le changer</h4>
                <input
                    type="password"
                    placeholder="Mot de passe actuel"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='confirmation-buttons'>
                    <button onClick={verifyPassword}>Vérifier</button>
                    <button onClick={onClose}>Fermer</button>
                </div>
            </div>
        </div>
    );
};

export default VerifyPasswordModal;
