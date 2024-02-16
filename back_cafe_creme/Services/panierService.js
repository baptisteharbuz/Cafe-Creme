const conn = require('./database')

const fetchPanierById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT
    P.PR_Id AS Id_Produit,
    P.PR_Prix AS Prix,
    P.PR_Img AS Image,
    PA.PA_Label AS Pays,
    P.PR_Label AS Produit,
    F.FO_Label AS Forme,
    PU.PU_ID AS Id_Panier,
    PU.PU_Quantite AS Quantite,
    (SELECT SUM(P2.PR_Prix) FROM Panier_Utilisateur PU2
     JOIN Produit P2 ON P2.PR_Id = PU2.PR_Id
     WHERE PU2.UT_Id = PU.UT_Id) AS Total
FROM
    Panier_Utilisateur PU
JOIN
    Produit P ON P.PR_Id = PU.PR_Id
JOIN
    Pays PA ON PA.PA_Id = P.PA_Id
JOIN
    Forme F ON F.FO_Id = P.FO_Id
WHERE
    PU.UT_Id = ?;`;
        let query = conn.query(sql, [id], (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const addToPanier = (produit) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO Panier_Utilisateur (UT_Id, PR_Id, PU_Quantite, PU_Date ) VALUES (?, ?, ?, NOW());"
        conn.query(sql, [produit.UT_Id, produit.PR_Id, produit.PU_Quantite], (err, result, field) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const deleteFromPanier = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM Panier_Utilisateur WHERE PU_ID = ?;";
        conn.query(sql, [id], (err, result, field) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

const updateQuantitePanier = (id_panier, nouvelleQuantite) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE Panier_Utilisateur SET PU_Quantite = ? WHERE PU_Id = ?;";
        conn.query(sql, [nouvelleQuantite, id_panier], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    fetchPanierById,
    addToPanier,
    deleteFromPanier,
    updateQuantitePanier
}