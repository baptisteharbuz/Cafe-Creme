const conn = require('./database')

const fetchResultatTest = (cafe) => {
    return new Promise((resolve, reject) => {
        const sql = `
    SELECT 
        P.PR_ID AS Id,
        P.PR_Img AS Image, 
        PA.PA_Label AS Pays,
        P.PR_Label AS Produit, 
        F.FO_Label AS Forme,
        GROUP_CONCAT(DISTINCT A.AR_Label SEPARATOR ', ') AS Arome,
        GROUP_CONCAT(DISTINCT S.SA_Label SEPARATOR ', ') AS Saveur,
        GROUP_CONCAT(DISTINCT AC.AC_Label SEPARATOR ', ') AS CategorieArômes, 
        GROUP_CONCAT(DISTINCT SC.SC_Label SEPARATOR ', ') AS CategorieSaveurs,
        I.IN_Label AS Intensite,
        P.PR_Prix AS Prix 
    FROM 
        Produit P
    JOIN 
        Produit_Arome_ Po ON P.PR_Id = Po.PR_Id
    JOIN 
        Arome A ON Po.AR_Id = A.AR_Id
    JOIN
        Arome_Categorie AC ON A.AC_Id = AC.AC_Id
    JOIN 
        Produit_Saveur_ R ON P.PR_Id = R.PR_Id
    JOIN 
        Saveur S ON R.SA_Id = S.SA_Id
    JOIN
        Saveur_Categorie SC ON S.SC_Id = SC.SC_Id
    JOIN
        Pays PA ON PA.PA_Id = P.PA_Id
    JOIN
        Intensite I ON I.IN_Id = P.IN_Id
    JOIN
        Intensite_Categorie IC ON IC.IC_Id = I.IN_Id
    JOIN
        Forme F ON F.FO_Id = P.FO_Id
    WHERE
        AC.AC_Label = ?
    AND
        SC.SC_Label = ?
    AND
        IC.IC_Label = ?
    AND
        F.FO_Label = ?
    GROUP BY
        P.PR_Id;`;
        const query = conn.query(sql, [cafe.arome, cafe.saveur, cafe.intensite, cafe.forme], (err, result, field) => {
            if (err) return reject(err);
            resolve(result);
            console.log(result);
        });
    })
}

module.exports = {
    fetchResultatTest
}