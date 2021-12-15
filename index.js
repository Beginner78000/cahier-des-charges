require('dotenv').config();
// import des bibliothèques et ressources pour init l'app web
const express = require('express');
const router = require("./app/router");

// création de notre objet express
const app = express();
const PORT = process.env.PORT || 5050;

//moteur de modeles ejs
app.set("view engine", "ejs");
// route vers nos views
app.set("views", "./views");

app.use(express.static("public"));

// on précise à express d'écouter le fichier dédié au route
app.use(router);

// app.use((require, response) => {
//     response.status(404).render('404 - Sorry page not found')
// });

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}, visit http://localhost:${PORT}`)
})