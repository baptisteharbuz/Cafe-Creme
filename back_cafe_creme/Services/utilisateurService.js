const conn = require('./database');
// const bcrypt = require('bcryptjs');
////////////////////////////////////////////////////////////////
// CONNEXION
const connexion = (user) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE UT_Mail = ?`;
        const query = conn.query(sql, [user.Mail], (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

////////////////////////////////////////////////////////////////
// INSCRIPTION
const inscription = (newUser) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Utilisateur (UT_Mail, UT_MotDePasse, UT_Nom, UT_Prenom) VALUES (?, ?, ?, ?)`;
        const query = conn.query(sql, [newUser.Mail, newUser.MotDePasse, newUser.Nom, newUser.Prenom], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

////////////////////////////////////////////////////////////////
// SUPPRESSION
const suppresion = async (id) => {
    // Requête préparée avec paramètres
    const sql = `DELETE FROM Utilisateur WHERE UT_Id = ?`;
    const result = await conn.query(sql, [id]);

    // Gestion des erreurs
    if (!result) {
        throw new Error('Utilisateur non trouvé.');
    }

    return result;
};

////////////////////////////////////////////////////////////////
// MODIFICATIONS
const modificationProfil = async (id, utilisateur) => {
    // Requête préparée avec paramètres
    const sql = `UPDATE Utilisateur SET UT_Nom = ?, UT_Prenom = ?, UT_Mail = ? WHERE UT_ID = ?`;
    const result = await conn.query(sql, [utilisateur.Nom, utilisateur.Prenom, utilisateur.Mail, id]);

    // Gestion des erreurs
    if (!result) {
        throw new Error('Utilisateur non trouvé ou une erreur est survenue lors de la modification.');
    }

    return result;
};

const modificationMotDePasse = async (id, nouveauMotDePasse) => {
    // Hachage du nouveau mot de passe
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = await bcrypt.hash(nouveauMotDePasse, salt);

    // Requête préparée avec paramètres
    const sql = `UPDATE Utilisateur SET UT_MotDePasse = ? WHERE UT_ID = ?`;
    const result = await conn.query(sql, [nouveauMotDePasse, id]);

    // Gestion des erreurs
    if (!result) {
        throw new Error('Utilisateur non trouvé ou une erreur est survenue lors de la modification du mot de passe.');
    }

    return result;
};

module.exports = {
    connexion,
    inscription,
    suppresion,
    modificationProfil,
    modificationMotDePasse,
};
