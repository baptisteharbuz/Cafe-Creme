const conn = require('./database');

////////////////////////////////////////////////////////////////
// CONNEXION
const connexion = (user) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE UT_Mail = ? AND UT_MotDePasse = ?`;
        const query = conn.query(sql, [user.Mail, user.MotDePasse], (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}
////////////////////////////////////////////////////////////////
// INSCRIPTION
const inscription = (user) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Utilisateur (UT_Nom, UT_Prenom, UT_Mail, UT_MotDePasse) VALUES (?, ?, ?, ?)`;
        conn.query(sql, [user.Nom, user.Prenom, user.Mail, user.MotDePasse], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
////////////////////////////////////////////////////////////////
// SUPPRESSION
const suppresion = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Utilisateur WHERE UT_Id = ?'
        const query = conn.query(sql, [id], (err, result, field) => {
            if (err) return reject(err);
            resolve(result)
        });
    });
}
////////////////////////////////////////////////////////////////
// MODIFICATIONS
const modificationProfil = (id, utilisateur) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Utilisateur SET UT_Nom = ?, UT_Prenom = ?, UT_Mail = ? WHERE UT_ID = ?`;
        const query = conn.query(sql, [utilisateur.Nom, utilisateur.Prenom, utilisateur.Mail, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const modificationMotDePasse = (id, nouveauMotDePasse) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Utilisateur SET UT_MotDePasse = ? WHERE UT_ID = ?`;
        const query = conn.query(sql, [nouveauMotDePasse, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    connexion,
    inscription,
    suppresion,
    modificationProfil,
    modificationMotDePasse
}