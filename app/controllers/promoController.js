// on exporte l'objet qui contient toutes les actions relatives aux route

const promos = require("../../data/promos.json");

module.exports = {
    list: (require, response) => {
        response.render('promos/list', {
            promos
        });
    },

    details: (req, res, next) => {
        const id = req.params.id;

        // version "boucle"
        // let promo;
        // // pour chaque promo p de promos
        // for (const p of promos) {
        //     // Number et parseInt quasi la même chose
        //     // ES6         ES5
        //     if (p.id === Number(id)) {
        //         promo = p;
        //         break;
        //     }
        // }

        // version array.find
        promo = promos.find((p) => {
            return p.id === Number(id);
        });

        // version one liner
        // promo = promos.find(p => p.id === Number(id));


        if (promo) {
            res.render('promos/details', {
                promo
            });
        } else {
            next();
        }
    },
    
};