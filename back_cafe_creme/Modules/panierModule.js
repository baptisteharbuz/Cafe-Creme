const express = require('express');
const router = express.Router();
const panierService = require('../Services/panierService');



////////////////////////////////////////////////////////////////
// RECUPERER PANIER PAR ID UTILISATEUR
router.get("/:id_utilisateur", async (req, res) => {
    panierService.fetchPanierById(req.params.id_utilisateur).then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({ "message": "Error" + err.sqlMessage })
    });
});

////////////////////////////////////////////////////////////////
// AJOUTER AU PANIER
router.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const result = await panierService.addToPanier(req.body);
        res.status(200).json(result);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});
////////////////////////////////////////////////////////////////
// SUPPRIMER PANIER PAR ID PANIER

router.delete("/:id_panier", async (req, res) => {
    console.log(req.params.id_panier);
    try {
        const result = await panierService.deleteFromPanier(req.params.id_panier);
        res.status(200).json(result);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});
////////////////////////////////////////////////////////////////
// MISE À JOUR DE LA QUANTITÉ DANS LE PANIER
router.put("/:id_panier/quantite", async (req, res) => {
    try {
        const { quantite } = req.body;
        const id_panier = req.params.id_panier;
        const result = await panierService.updateQuantitePanier(id_panier, quantite);
        res.status(200).json(result);
    } catch (err) {
        console.error("Erreur lors de la mise à jour de la quantité", err);
        res.status(500).json({ "message": "Erreur lors de la mise à jour de la quantité: " + err.sqlMessage });
    }
});

module.exports = router;