const conn = require('./database')

const fetchProduit = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT " +
            "P.PR_Id AS Id, " +
            "P.PR_Img AS Image, " +
            "PA.PA_Label AS Pays, " +
            "P.PR_Label AS Produit, " +
            "F.FO_Label AS Forme, " +
            "P.PR_Description AS Description, " +
            "GROUP_CONCAT(DISTINCT A.AR_Label SEPARATOR ', ') AS Arome, " +
            "GROUP_CONCAT(DISTINCT S.SA_Label SEPARATOR ', ') AS Saveur, " +
            "I.IN_Label AS Intensite, " +
            "P.PR_Certification AS BIO, " +
            "P.PR_Robusta AS Robusta, " +
            "P.PR_Arabica AS Arabica, " +
            "P.PR_Prix AS Prix " +
            "FROM " +
            "Produit P " +
            "JOIN " +
            "Posseder Po ON P.PR_Id = Po.PR_Id " +
            "JOIN " +
            "Arome A ON Po.AR_Id = A.AR_Id " +
            "JOIN " +
            "Renfermer R ON P.PR_Id = R.PR_Id " +
            "JOIN " +
            "Saveur S ON R.SA_Id = S.SA_Id " +
            "JOIN " +
            "Pays PA ON PA.PA_Id = P.PA_Id " +
            "JOIN " +
            "Intensite I ON I.IN_Id = P.IN_Id " +
            "JOIN " +
            "Forme F ON F.FO_Id = P.FO_Id " +
            "GROUP BY " +
            "P.PR_Id, PA.PA_Label, P.PR_Label, F.FO_Label, P.PR_Description, I.IN_Label, P.PR_Certification, P.PR_Robusta, P.PR_Arabica " +
            "ORDER BY PA.PA_Label ASC;";
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const fetchNewProduit = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT " +
            "P.PR_Id AS Id, " +
            "P.PR_Img AS Image, " +
            "PA.PA_Label AS Pays, " +
            "P.PR_Label AS Produit, " +
            "F.FO_Label AS Forme, " +
            "P.PR_Description AS Description, " +
            "GROUP_CONCAT(DISTINCT A.AR_Label SEPARATOR ', ') AS Arome, " +
            "GROUP_CONCAT(DISTINCT S.SA_Label SEPARATOR ', ') AS Saveur, " +
            "I.IN_Label AS Intensite, " +
            "P.PR_Certification AS BIO, " +
            "P.PR_Robusta AS Robusta, " +
            "P.PR_Arabica AS Arabica " +
            "FROM " +
            "Produit P " +
            "JOIN " +
            "Posseder Po ON P.PR_Id = Po.PR_Id " +
            "JOIN " +
            "Arome A ON Po.AR_Id = A.AR_Id " +
            "JOIN " +
            "Renfermer R ON P.PR_Id = R.PR_Id " +
            "JOIN " +
            "Saveur S ON R.SA_Id = S.SA_Id " +
            "JOIN " +
            "Pays PA ON PA.PA_Id = P.PA_Id " +
            "JOIN " +
            "Intensite I ON I.IN_Id = P.IN_Id " +
            "JOIN " +
            "Forme F ON F.FO_Id = P.FO_Id " +
            "GROUP BY " +
            "P.PR_Id, PA.PA_Label, P.PR_Label, F.FO_Label, P.PR_Description, I.IN_Label, P.PR_Certification, P.PR_Robusta, P.PR_Arabica " +
            "ORDER BY P.PR_Id DESC LIMIT 1;";
        let query = conn.query(sql, (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const fetchProduitById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT " +
            "P.PR_Img AS Image, " +
            "PA.PA_Label AS Pays, " +
            "P.PR_Label AS Produit, " +
            "F.FO_Label AS Forme, " +
            "P.PR_Description AS Description, " +
            "GROUP_CONCAT(DISTINCT A.AR_Label SEPARATOR ', ') AS Arome, " +
            "GROUP_CONCAT(DISTINCT S.SA_Label SEPARATOR ', ') AS Saveur, " +
            "I.IN_Label AS Intensite, " +
            "P.PR_Certification AS BIO, " +
            "P.PR_Robusta AS Robusta, " +
            "P.PR_Arabica AS Arabica, " +
            "P.PR_Prix AS Prix, " +
            "P.PR_Origine AS Origine, " +
            "P.PR_Degustation AS Degustation, " +
            "P.PR_Preparation AS Preparation, " +
            "P.PR_Resume AS Resume " +
            "FROM " +
            "Produit P " +
            "JOIN " +
            "Posseder Po ON P.PR_Id = Po.PR_Id " +
            "JOIN " +
            "Arome A ON Po.AR_Id = A.AR_Id " +
            "JOIN " +
            "Renfermer R ON P.PR_Id = R.PR_Id " +
            "JOIN " +
            "Saveur S ON R.SA_Id = S.SA_Id " +
            "JOIN " +
            "Pays PA ON PA.PA_Id = P.PA_Id " +
            "JOIN " +
            "Intensite I ON I.IN_Id = P.IN_Id " +
            "JOIN " +
            "Forme F ON F.FO_Id = P.FO_Id " +
            "WHERE " +
            "P.PR_Id = ? " +
            "GROUP BY " +
            "P.PR_Id, PA.PA_Label, P.PR_Label, F.FO_Label, P.PR_Description, I.IN_Label, P.PR_Certification, P.PR_Robusta, P.PR_Arabica, P.PR_Prix, P.PR_Origine, P.PR_Degustation, P.PR_Preparation, P.PR_Resume;"
            ;
        let query = conn.query(sql, [id], (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const updateProduit = (produit) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE Produit SET PR_Label = ?," +
            "PR_Prix = ?," +
            "FK_Type_Produit = ?," +
            " WHERE PR_ID = ?;";
        conn.query(sql, [produit.Label, produit.prix, produit.type, produit.Id], (err, result, field) => {
            if (err) return reject(err)
            resolve(result)
        })
    })
}

module.exports = {
    fetchProduit,
    fetchNewProduit,
    fetchProduitById,
    updateProduit
}

