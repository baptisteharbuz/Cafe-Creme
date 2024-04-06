require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
//Services
const { checkTokenMiddleware } = require('./Services/middleware')
//Modules
const login = require('./Modules/utilisateurModule')
const produit = require('./Modules/produitModule');
const forme = require('./Modules/formeModule');
const panier = require('./Modules/panierModule');
const cafeTest = require('./Modules/testCafeModule');
const admin = require('./Modules/AdminModule');
const aromes = require('./Modules/aromesModule');
const saveurs = require('./Modules/saveursModule')

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
app.use("/admin", admin);
app.use("/aromes", aromes)
app.use("/saveurs", saveurs)

app.listen(port, () => {
    console.log(`L'application est à l'écoute sur le port https://127.0.0.1:${port}/ !`);
});



// require('dotenv').config();
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT;
// //Modules
// const produit = require('./Modules/produitModule');

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send("Hello Café Crème")
// })

// app.use("/produit", produit);

// app.listen(port, () => {
//     console.log(`L'application est à l'écoute sur le port https://127.0.0.1:${port}/ !`);
// });

