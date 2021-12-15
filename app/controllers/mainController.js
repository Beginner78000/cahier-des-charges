// on exporte l'objet qui contient toutes les actions relatives aux route

module.exports = {
    home: (require, response) => {
        response.render('home');
    },
};