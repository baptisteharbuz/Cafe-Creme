const conn = require('./database');

const ajouterProduit = (produit) => {
    return new Promise((resolve, reject) => {
        conn.beginTransaction(err => {
            if (err) { reject(err); return; }

            const sqlProduit = `INSERT INTO Produit (PR_Label, PR_Img, PR_Description, PR_Origine, PR_Degustation, PR_Preparation, PR_Resume, PR_Robusta, PR_Arabica, PR_Certification, PR_Prix, PA_Id, FO_Id, IN_Id) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            conn.query(sqlProduit, [
                produit.PR_Label, produit.PR_Img, produit.PR_Description, produit.PR_Origine, produit.PR_Degustation,
                produit.PR_Preparation, produit.PR_Resume, produit.PR_Robusta, produit.PR_Arabica,
                produit.PR_Certification, produit.PR_Prix, produit.PA_Id, produit.FO_Id, produit.IN_Id
            ], (err, result) => {
                if (err) {
                    conn.rollback(() => reject(err));
                    return;
                }

                const newProductId = result.insertId;

                const insertAssociations = async () => {

                    // Insérer les nouveaux arômes
                    if (produit.aromesChoisis && produit.aromesChoisis.length) {
                        const sqlArome = `INSERT INTO Posseder (PR_Id, AR_Id) VALUES ?`;
                        const aromeValues = produit.aromesChoisis.map(aromeId => [newProductId, aromeId]);
                        await new Promise((resolve, reject) => {
                            conn.query(sqlArome, [aromeValues], (err, result) => {
                                if (err) {
                                    conn.rollback(() => reject(err));
                                    return;
                                }
                                resolve(result);
                            });
                        });
                    }

                    // Insérer les nouveaux saveurs
                    if (produit.saveursChoisis && produit.saveursChoisis.length) {
                        const sqlSaveur = `INSERT INTO Renfermer (PR_Id, SA_Id) VALUES ?`;
                        const saveurValues = produit.saveursChoisis.map(saveurId => [newProductId, saveurId]);
                        await new Promise((resolve, reject) => {
                            conn.query(sqlSaveur, [saveurValues], (err, result) => {
                                if (err) {
                                    conn.rollback(() => reject(err));
                                    return;
                                }
                                resolve(result);
                            });
                        });
                    }
                };

                insertAssociations().then(() => {
                    conn.commit(err => {
                        if (err) {
                            conn.rollback(() => reject(err));
                            return;
                        }
                        resolve(newProductId);
                    });
                }).catch(err => reject(err));
            });
        });
    });
};

const modifierProduit = (id, produit) => {
    return new Promise((resolve, reject) => {
        conn.beginTransaction(err => {
            if (err) { reject(err); return; }

            const sqlProduit = `UPDATE Produit
                                SET PR_Label = ?, PR_Img = ?,
                                    PR_Origine = ?, PR_Degustation = ?,
                                    PR_Preparation = ?, PR_Resume = ?,
                                    PR_Robusta = ?, PR_Arabica = ?,
                                    PR_Certification = ?, PR_Prix = ?,
                                    PA_Id = ?, FO_Id = ?, IN_Id = ?
                                WHERE PR_Id = ?`;
            conn.query(sqlProduit, [
                produit.PR_Label, produit.PR_Img, produit.PR_Origine, produit.PR_Degustation,
                produit.PR_Preparation, produit.PR_Resume, produit.PR_Robusta, produit.PR_Arabica,
                produit.PR_Certification, produit.PR_Prix, produit.PA_Id, produit.FO_Id, produit.IN_Id,
                id
            ], async (err, result) => {
                if (err) {
                    conn.rollback(() => reject(err));
                    return;
                }

                const updateAssociations = async () => {
                    // Supprimer les associations existantes
                    await Promise.all([
                        new Promise((resolve, reject) => {
                            conn.query(`DELETE FROM Posseder WHERE PR_Id = ?`, [id], (err, result) => {
                                if (err) reject(err);
                                else resolve(result);
                            });
                        }),
                        new Promise((resolve, reject) => {
                            conn.query(`DELETE FROM Renfermer WHERE PR_Id = ?`, [id], (err, result) => {
                                if (err) reject(err);
                                else resolve(result);
                            });
                        })
                    ]);

                    // Insérer les nouveaux arômes
                    if (produit.aromesChoisis && produit.aromesChoisis.length) {
                        const sqlArome = `INSERT INTO Posseder (PR_Id, AR_Id) VALUES ?`;
                        const aromeValues = produit.aromesChoisis.map(aromeId => [id, aromeId]);
                        await new Promise((resolve, reject) => {
                            conn.query(sqlArome, [aromeValues], (err, result) => {
                                if (err) {
                                    conn.rollback(() => reject(err));
                                    return;
                                }
                                resolve(result);
                            });
                        });
                    }

                    // Insérer les nouvelles saveurs
                    if (produit.saveursChoisis && produit.saveursChoisis.length) {
                        const sqlSaveur = `INSERT INTO Renfermer (PR_Id, SA_Id) VALUES ?`;
                        const saveurValues = produit.saveursChoisis.map(saveurId => [id, saveurId]);
                        await new Promise((resolve, reject) => {
                            conn.query(sqlSaveur, [saveurValues], (err, result) => {
                                if (err) {
                                    conn.rollback(() => reject(err));
                                    return;
                                }
                                resolve(result);
                            });
                        });
                    }
                };

                updateAssociations().then(() => {
                    conn.commit(err => {
                        if (err) {
                            conn.rollback(() => reject(err));
                            return;
                        }
                        resolve(result);
                    });
                }).catch(err => reject(err));
            });
        });
    });
};

const supprimerProduit = (id) => {
    return new Promise((resolve, reject) => {
        conn.beginTransaction(err => {
            if (err) { reject(err); return; }

            // Supprimer les données de la table Posseder
            const deletePosseder = `DELETE FROM Posseder WHERE PR_Id = ?`;
            conn.query(deletePosseder, [id], (err, result) => {
                if (err) {
                    conn.rollback(() => reject(err));
                    return;
                }

                // Supprimer les données de la table Renfermer
                const deleteRenfermer = `DELETE FROM Renfermer WHERE PR_Id = ?`;
                conn.query(deleteRenfermer, [id], (err, result) => {
                    if (err) {
                        conn.rollback(() => reject(err));
                        return;
                    }

                    // Supprimer le produit de la table Produits
                    const deleteProduits = `DELETE FROM Produits WHERE PR_Id = ?`;
                    conn.query(deleteProduits, [id], (err, result) => {
                        if (err) {
                            conn.rollback(() => reject(err));
                            return;
                        }

                        conn.commit(err => {
                            if (err) {
                                conn.rollback(() => reject(err));
                                return;
                            }
                            resolve(result);
                        });
                    });
                });
            });
        });
    });
};

module.exports = {
    ajouterProduit,
    modifierProduit,
    supprimerProduit
};