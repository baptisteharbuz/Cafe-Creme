const conn = require('./database');

const ajouterProduit = (produit) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO Produits (PR_Label, PR_Img, PR_Origine, PR_Degustation, PR_Preparation, PR_Resume, PR_Robusta, PR_Arabica, PR_Certification, PR_Prix) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        conn.query(sql, [produit.PR_Label, produit.PR_Img, produit.PR_Origine, produit.PR_Degustation, produit.PR_Preparation, produit.PR_Resume, produit.PR_Robusta, produit.PR_Arabica, produit.PR_Certification, produit.PR_Prix], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const modifierProduit = (id, produit) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE Produits SET PR_Label = ?, PR_Img = ?, PR_Origine = ?, PR_Degustation = ?, PR_Preparation = ?, PR_Resume = ?, PR_Robusta = ?, PR_Arabica = ?, PR_Certification = ?, PR_Prix = ? WHERE PR_Id = ?`;
        conn.query(sql, [produit.PR_Label, produit.PR_Img, produit.PR_Origine, produit.PR_Degustation, produit.PR_Preparation, produit.PR_Resume, produit.PR_Robusta, produit.PR_Arabica, produit.PR_Certification, produit.PR_Prix, id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const supprimerProduit = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `DELETE FROM Produits WHERE PR_Id = ?`;
        conn.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    ajouterProduit,
    modifierProduit,
    supprimerProduit
};