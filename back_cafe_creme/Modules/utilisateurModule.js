require('dotenv').config();
const loginService = require("../Services/utilisateurService");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.SECRET;

// CONNEXION
router.post('/login', (req, res, next) => {
    const user = req.body;
    if (!user.Mail || !user.MotDePasse) {
        return res.status(400).json({ message: "Veuillez renseigner un email et un mot de passe" });
    }
    // Recherche de l'utilisateur dans la base de données par son email
    loginService.login(user)
        .then((result) => {
            if (result.length > 0) {
                // Comparaison du mot de passe fourni avec le mot de passe haché stocké dans la base de données
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = result[0].MotDePasse;
                bcrypt.hash(user.MotDePasse, salt, (err, hashedPassword) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send({ "message": "Erreur lors du hachage du mot de passe." });
                        return;
                    }
                    // Comparaison du mot de passe fourni avec le mot de passe haché stocké dans la base de données
                    bcrypt.compare(user.MotDePasse, hashedPassword, (err, passwordMatch) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({ "message": "Erreur lors de la comparaison des mots de passe." });
                            return;
                        }
                        if (passwordMatch) {
                            // Si les mots de passe correspondent, génération d'un token JWT
                            const token = jwt.sign({
                                user: result[0]
                            }, jwtSecret, { expiresIn: '3h' });
                            res.json({
                                access_token: token,
                                user: result[0],
                                isLoggedIn: true
                            });
                            res.status(200)
                        } else {
                            // Si les mots de passe ne correspondent pas
                            res.status(401).json({ message: "Mot de passe incorrect" });
                        }
                    });
                })
            } else {
                // Si aucun utilisateur correspondant n'est trouvé, renvoyez un message d'erreur
                res.status(404).json({ message: "Utilisateur non trouvé" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Une erreur s'est produite lors de la recherche de l'utilisateur" });
        });
});



////////////////////////////////////////////////////////////////
// INSCRIPTION
router.post('/register', (req, res) => {
    const user = req.body;
    // Vérification préalable pour s'assurer que l'utilisateur n'existe pas déjà
    loginService.login({ Mail: user.Mail }).then(existingUsers => {
        if (existingUsers.length > 0) {
            // Si l'utilisateur existe déjà, renvoyez un message d'erreur
            res.status(409).json({ message: "L'adresse email est déjà utilisée par un autre compte." });
            return;
        }
        // Hachage du mot de passe
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                console.log(err);
                res.status(500).send({ "message": "Erreur lors de la génération du sel pour le mot de passe." });
                return;
            }
            bcrypt.hash(user.MotDePasse, salt, (err, hashedPassword) => {
                if (err) {
                    console.log(err);
                    res.status(500).send({ "message": "Erreur lors du hachage du mot de passe." });
                    return;
                }
                // Création de l'utilisateur avec le mot de passe haché
                const newUser = {
                    Mail: user.Mail,
                    MotDePasse: hashedPassword,
                    Nom: user.Nom,
                    Prenom: user.Prenom
                };
                // Appel de la fonction d'register définie dans votre service
                loginService.register(newUser)
                    .then((result) => {
                        res.status(201).json({ message: "Utilisateur créé avec succès", userId: result.insertId });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'utilisateur" });
                    });
            });
        });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la vérification de l'existence de l'utilisateur" });
    });
});
////////////////////////////////////////////////////////////////
// SUPPRESSION
router.delete("/:id_utilisateur", async (req, res) => {
    console.log(req.params.id_utilisateur);
    try {
        const result = await loginService.supprimer(req.params.id_utilisateur);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
});

////////////////////////////////////////////////////////////////
// MODIFICATIONS(Profil)
router.put("/modification/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userUpdates = req.body;
        console.log("testtest")
        const result = await loginService.modificationProfil(id, userUpdates);
        res.status(200).json({ message: "Profil utilisateur mis à jour avec succès", user: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
});
// router.put("/modification/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { motDePasseActuel, ...userUpdates } = req.body;
//         console.log(motDePasseActuel)
//         const utilisateurActuel = await loginService.fetchUtilisateurByID(id);
//         if (!utilisateurActuel) {
//             return res.status(404).json({ message: "Utilisateur non trouvé" });
//         }
//         const motDePasseValide = await bcrypt.compare(motDePasseActuel, utilisateurActuel.mdp);
//         if (!motDePasseValide) {
//             return res.status(401).json({ message: "Mot de passe incorrect" });
//         }
//         await utilisateurService.modificationProfil(id, userUpdates);
//         return res.status(200).json({ message: "Profil utilisateur mis à jour avec succès" });
//     } catch (err) {
//         console.error("Erreur lors de la mise à jour du profil :", err);
//         return res.status(500).json({ message: "Une erreur est survenue" });
//     }
// });
// router.put("/changerMotDePasse/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { nouveauMotDePasse } = req.body;

//         const result = await loginService.modificationMotDePasse(id, nouveauMotDePasse);
//         res.status(200).json({ message: "Mot de passe mis à jour avec succès", result });
//     } catch (err) {
//         console.error("Erreur lors de la mise à jour du mot de passe", err);
//         res.status(500).json({ message: "Une erreur est survenue" });
//     }
// });

// MODIFICATIONS (mod de passe)
router.put("/changerMotDePasse/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nouveauMotDePasse } = req.body;

        // Hachage du nouveau mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(nouveauMotDePasse, salt);

        // Mise à jour du mot de passe haché dans la base de données
        const result = await loginService.modificationMotDePasse(id, hashedPassword);
        res.status(200).json({ message: "Mot de passe mis à jour avec succès", result });
    } catch (err) {
        console.error("Erreur lors de la mise à jour du mot de passe", err);
        res.status(500).json({ message: "Une erreur est survenue" });
    }
});


module.exports = router;