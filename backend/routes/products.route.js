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

productRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, member) {
      res.json(member);
    });
  });



module.exports=productRoutes;