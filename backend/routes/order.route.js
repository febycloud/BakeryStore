const express=require('express');
const app =express();
const orderRoutes=express.Router();
let Order=require('../database/model/Order');

orderRoutes.route('/').get(function(req,res){
    Order.find(function(err,orders){
        if(err){console.log(err);}
        else{
            res.json(orders);
        }
    });
});

orderRoutes.route('/add').post(function(req,res){
    let order=new Order(req.body);
    order.save()
    .then(order=>{res.status(200).json({'Order':'order has been added'});
})
    .catch(err=>{res.status(400).send("unable save to database")});
});


module.exports=orderRoutes;
