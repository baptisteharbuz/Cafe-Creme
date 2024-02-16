const adminService = require("../Services/AdminService");
const express = require("express")
const router = express.Router()


router.post('/', async (req, res) => {
    try {
        const result = await adminService.ajouterProduit(req.body);
        res.status(200).json(result);
    } catch (err) {
        console.error("Erreur lors de l'ajout du produit", err);
        res.status(500).json({ "message": "Erreur : " + err.sqlMessage });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const result = await adminService.modifierProduit(req.params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        console.error("Erreur lors de la modification du produit", err);
        res.status(500).json({ "message": "Erreur : " + err.sqlMessage });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await adminService.supprimerProduit(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.error("Erreur lors de la suppression du produit", err);
        res.status(500).json({ "message": "Erreur : " + err.sqlMessage });
    }
});

module.exports = router;