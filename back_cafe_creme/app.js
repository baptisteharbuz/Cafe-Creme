const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
//Services
const { checkTokenMiddleware } = require('./Services/uti')
//Modules
const login = require('./Modules/utilisateurModule')
const produit = require('./Modules/produitModule');
const forme = require('./Modules/formeModule');
const panier = require('./Modules/panierModule');
const cafeTest = require('./Modules/testCafeModule');
const adminService = require('./Modules/AdminModule');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello Café Crème")
})

app.use("/utilisateur", login)
app.use("/produit", produit);
app.use("/forme", forme);
app.use("/panier", checkTokenMiddleware, panier);
app.use("/cafetest", cafeTest);
app.use("/admin", checkTokenMiddleware, adminService);

app.listen(port, () => {
    console.log(`L'application est à l'écoute sur le port https://127.0.0.1:${port}/ !`);
});
