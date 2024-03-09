const express = require('express');
const router = express.Router();
const aromeService = require('../Services/aromesService');

router.get("/", (req, res) => {
    const data = req.body;
    aromeService.fetchArome(data).then((result) => {
        res.json(result)
    }).catch(() => {
        res.json({ message: "Une erreur est survenue !!" })
    })
});

module.exports = router;