var Producte = require("../../models/producte");
var router = require("express").Router();

router.get("/:id", function (req,res,next) {
    Producte.find({nom: req.params.id}, function(err,producte) {
        if (err) {
            return next(err);
        }
        res.json(producte);
    });
   
});

router.get("/", function(req, res, next) {
    Producte.find().sort('-date').exec(function(err, productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
    
});


router.post("/", function (req,res,next) {
    var producte = new Producte({
        nom: req.body.nom,
        preu: req.body.preu,
        existencies : req.body.existencies,
        });
    producte.save(function(err, producte) {
        if (err) { return next(err) }
        res.status(201).json(producte);
    });
});


router.put( "/:id", function( req, res, next ) {
   
    
    Producte.find({"nom": req.params.id} , function(err, producte) {
        console.log(producte);
        if (err) return next(err);
        Producte.findByIdAndUpdate(producte[0]._id, req.body, function(err) {
            if (err) return next(err);
            console.log('patata')
            res.status(201).json({"missatge" :"producte modificat"});
        });
                });
});


router.delete( "/:id", function( req, res, next ) {
    
   Producte.remove({"nom":req.params.id}, function( err) {
       if(err){
           return next(err);
       } 
       res.status(200);
    });
});
module.exports = router;