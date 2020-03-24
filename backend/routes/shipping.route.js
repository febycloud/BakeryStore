const express=require('express');
const app =express();
const shippingRoutes=express.Router();
let Shipping=require('../database/model/Shipping');

shippingRoutes.route('/').get(function(req,res){
    Shipping.find(function(err,shipping){
        if(err){console.log(err);}
        else{
            res.json(shipping);
        }
    });
});

shippingRoutes.route('/add').post(function(req,res){
    let shipping=new Shipping(req.body);
    shipping.save()
    .then(shipping=>{res.status(200).json({'Shipping':'shipping has been added'});
})
    .catch(err=>{res.status(400).send("unable save to database")});
});


module.exports=shippingRoutes;