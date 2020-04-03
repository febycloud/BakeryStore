const express=require('express');
const app =express();
const productRoutes=express.Router();
let Product=require('../database/model/Products');

productRoutes.route('/').get(function(req,res){
    Product.find(function(err,products){
        if(err){console.log(err);}
        else{
            res.json(products);
        }
    });
});

//console.log(Product.findById('5e7ce494bc973e62fca75f93'));
productRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    console.log(id);
    Product.findById(id, function (err, products) {
      if(err){console.log(err);}
      else{
          res.json(products);
          console.log(products);
      }
    });
  });



module.exports=productRoutes;