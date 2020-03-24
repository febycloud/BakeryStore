const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//define collections

let Order=new Schema({
    order_id:{type:String},
    customer_id:{type:String},
    subtotal:{type:Number},
    tax:{type:Number},
    item_id:{type:String},
    quantity:{type:Number},
    comment:{type:String},
    total:{type:String},
    date:{type:Date}
},{
    
    collection: 'Order'   
})



module.exports = mongoose.model('Order', Order);
