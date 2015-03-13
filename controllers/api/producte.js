var Producte = require("../../models/producte");
var router = require("express").Router();

router.get("/:id", function (req,res,next) {
    Producte.find({codi: req.params.id}, function(err,producte) {
        if (err) {
            return next(err);
        }
        res.json(producte);
    });
   
});

/*Les cerques secció i preu funcionen bé*/

router.get("/seccio/:seccio", function (req,res,next) {
    Producte.find({seccio: req.params.seccio}, function(err,productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
   
});


router.get("/preu/:preu", function (req,res,next) {
    Producte.find({preu: req.params.preu}, function(err,productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
   
});


router.get("/", function(req, res, next) {
    Producte.find(function(err, productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
    
});


router.post("/", function (req,res,next) {
    var producte = new Producte({
        codi: req.body.codi,
        nom: req.body.nom,
        seccio: req.body.seccio,
        preu: req.body.preu,
        });
    producte.save(function(err, producte) {
        if (err) { return next(err) }
        res.status(201).json(producte);
    });
});


router.put( "/:id", function( req, res, next ) {
   
    
    Producte.find({"codi": req.params.id} , function(err, producte) {
        console.log(producte);
        if (err) return next(err);
        Producte.findByIdAndUpdate(producte[0]._id, req.body, function(err) {
            if (err) return next(err);
          
            res.status(201).json({"missatge" :"producte modificat"});
        });
                });
});


router.delete( "/:id", function( req, res, next ) {
    
   Producte.remove({"codi":req.params.id}, function( err) {
       if(err){
           return next(err);
       } 
       res.status(200);
    });
});
module.exports = router;