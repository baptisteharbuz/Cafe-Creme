const conn = require('./database')


const fetchProduitByFormeId = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT " +
            "P.PR_Img AS Image, " +
            "PA.PA_Label AS Pays, " +
            "P.PR_Label AS Produit, " +
            "GROUP_CONCAT(DISTINCT AC.AC_Label SEPARATOR ', ') AS Arome, " +
            "GROUP_CONCAT(DISTINCT SC.SC_Label SEPARATOR ', ') AS Saveur, " +
            "I.IN_Label AS Intensité, " +
            "P.PR_Certification AS Bio, " +
            "P.PR_Prix AS Prix " +
            "FROM " +
            "Produit P " +
            "JOIN " +
            "Posseder PO ON P.PR_Id = PO.PR_Id " +
            "JOIN " +
            "Arome A ON PO.AR_Id = A.AR_Id " +
            "JOIN " +
            "Arome_Categorie AC ON A.AC_Id = AC.AC_Id " +
            "JOIN " +
            "Renfermer R ON P.PR_Id = R.PR_Id " +
            "JOIN " +
            "Saveur S ON R.SA_Id = S.SA_Id " +
            "JOIN " +
            "Saveur_Categorie SC ON S.SC_Id = SC.SC_Id " +
            "JOIN " +
            "Pays PA ON PA.PA_Id = P.PA_Id " +
            "JOIN " +
            "Intensite I ON I.IN_Id = P.IN_Id " +
            "JOIN " +
            "Forme F ON F.FO_Id = P.FO_Id " +
            "WHERE " +
            "F.FO_Id = ? " +
            "GROUP BY " +
            "P.PR_Id, PA.PA_Label, P.PR_Label, F.FO_Label, P.PR_Description, I.IN_Label, P.PR_Certification, P.PR_Prix;";
        let query = conn.query(sql, [id], (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}


module.exports = {
    fetchProduitByFormeId
}