const express = require('express');
const router = express.Router();
const produitService = require('../Services/produitService');

router.get("/", (req, res) => {
    produitService.fetchNewProduit().then((result) => {
        res.json(result)
    }).catch(() => {
        res.json({ message: "Une erreur est survenue !!" })
    })
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    // res.json({data : id}) POUR TESTER SI ÇA FONCTIONNE
    produitService.fetchProduitById(id).then((result) => {
        res.json(result[0])
    }).catch((err) => {
        console.log(err);
        res.json({ message: "Je n'ai pas réussi à afficher ce produit !!" })
    })
})

router.post("/", (req, res) => {
    const data = req.body;
    produitService.addProduit(data).then((result) => {
        res.json({ data: result[0] })
    }).catch((err) => {
        console.log(err)
        res.json({ message: "Une erreur est survenue !!" })
    })
})

router.delete("/:id", (req, res) => {
    const currentId = req.params.id;
    produitService.deleteProduit(currentId).then((result) => {
        res.json({ message: "Le produit N°" + currentId + " à bien été supprimé" })
    }).catch((err) => {
        console.log(err)
        res.json({ message: "Une erreur est survenue !!" })
    })
})

router.patch("/", (req, res) => {
    const data = req.body;
    produitService.updateProduit(data).then((result) => {
        res.json({ message: "Votre produit " + data.Label + " à bien été modifié" })
    }).catch((err) => {
        console.log(err)
        res.json({ message: "Une erreur est survenue !!" })
    })
})

module.exports = router;