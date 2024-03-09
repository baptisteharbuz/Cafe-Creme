const express = require('express');
const router = express.Router();
const saveurService = require('../Services/saveurService.js');

router.get("/", (req, res) => {
    const data = req.body;
    saveurService.fetchSaveur(data).then((result) => {
        res.json(result)
    }).catch(() => {
        res.json({ message: "Une erreur est survenue !!" })
    })
});

module.exports = router;