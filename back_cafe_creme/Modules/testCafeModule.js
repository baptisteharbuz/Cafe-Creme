const express = require('express');
const router = express.Router();
const cafeTestService = require('../Services/testCafeService')


router.post("/", (req, res) => {
    let data = req.body
    cafeTestService.fetchResultatTest(data).then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.json({ message: "Je n'ai pas réussi à afficher ce produit" })
    });
});

module.exports = router;