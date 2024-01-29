const express = require('express');
const router = express.Router();
const formeService = require('../Services/formeService');


router.get("/:id", (req, res) => {
    const id = req.params.id;
    formeService.fetchProduitByFormeId(id).then((result) => {
        res.json({ data: result })
    }).catch((err) => {
        console.log(err);
        res.json({ message: "Je n'ai pas réussi à afficher ce label !!" })
    })
});


module.exports = router;