var db = require("../db");
var Producte = db.model('Producte', {
    
            nom: {
                type: String,
                required: true,
            },
            preu: {
                type: String,
                required: true
            },
            existencies: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true,
                default: Date.now
            }
       
    });

module.exports = Producte;