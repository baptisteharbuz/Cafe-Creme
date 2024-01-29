const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
//Services
// const {checkTokenMiddleware} = require('./Services/uti')
//Modules
// const LoginModule = require('./Module/LoginModule');
// const typeProduit = require('./Module/TypeProduitModule')
// const style = require('./Module/StyleModule')
// const type = require('./Module/TypeModule')
const produit = require('./Modules/produitModule')
const forme = require('./Modules/formeModule')

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Hello Café Crème")
})

// app.use("/connexion", LoginModule)
// app.use("/typeProduit", checkTokenMiddleware, typeProduit);
// app.use("/style", checkTokenMiddleware, style);
// app.use("/type", checkTokenMiddleware, type);
app.use("/produit", produit);
app.use("/forme", forme);

app.listen(port, () => {
    console.log(`L'application est à l'écoute sur le port https://127.0.0.1:${port}/ !`);
});
