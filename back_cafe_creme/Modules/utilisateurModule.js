const loginService = require("../Services/utilisateurService");
const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken");
const SECRET = "MOTDEPASSE";

////////////////////////////////////////////////////////////////
// CONNEXION
router.post('/', async (req, res) => {
    const user = req.body;
    if (!user.Mail || !user.MotDePasse) {
        return res.status(400).json({ "message": "Veuillez renseigner un email et un mot de passe" });
    }
    try {
        const result = await loginService.connexion(user);
        if (result && result.length > 0) {
            const token = jwt.sign({ user: result[0] }, SECRET, { expiresIn: '3 hours' });
            res.json({ access_token: token, user: result[0] });
        } else {
            res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur interne du serveur" });
    }
});
////////////////////////////////////////////////////////////////
// INSCRIPTION 
router.post("/inscription", async (req, res) => {
    try {
        const user = req.body;
        const result = await loginService.inscription(user);
        const token = jwt.sign({ user: result[0] }, SECRET, { expiresIn: '3 hours' });
        res.status(200).json({ access_token: token, user: result[0] });
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});
////////////////////////////////////////////////////////////////
// SUPPRESSION
router.delete("/:id_utilisateur", async (req, res) => {
    console.log(req.params.id_utilisateur);
    try {
        const result = await loginService.suppresion(req.params.id_utilisateur);
        res.status(200).json(result);
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Error" + err.sqlMessage });
    }
});
////////////////////////////////////////////////////////////////
// MODIFICATIONS
router.put("/modification/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userUpdates = req.body;
        const result = await loginService.modificationProfil(id, userUpdates);
        res.status(200).json({ message: "Profil utilisateur mis à jour avec succès", user: result });
    } catch (err) {
        console.error("Oops...", err);
        res.status(500).json({ "message": "Erreur " + err.sqlMessage });
    }
});

router.put("/changerMotDePasse/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nouveauMotDePasse } = req.body; // Assurez-vous que le corps de la requête contient le nouveau mot de passe sous cette clé
        const result = await loginService.modificationMotDePasse(id, nouveauMotDePasse);
        res.status(200).json({ message: "Mot de passe mis à jour avec succès" });
    } catch (err) {
        console.error("Erreur lors de la mise à jour du mot de passe", err);
        res.status(500).json({ "message": "Erreur " + err.sqlMessage });
    }
});


module.exports = router;