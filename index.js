require('dotenv').config();
// import des bibliothèques et ressources pour init l'app web
const express = require('express');

// création de notre objet express
const app = express();

const PORT = process.env.PORT || 5050;


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}, visit http://localhost:${PORT}`)
})