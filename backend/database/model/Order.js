const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//define collections

let Order=new Schema({
    orderId:{type:String},
    status:{type:String},
    subtotal:{type:Number},
    tax:{type:Number},
    total:{type:Number},
    date:{type:Date},
    orderProductId:{ type: Array},
    orderProductName:{ type: Array},
    orderProductIsDonation:{ type: Array},
    orderProductIsGift:{type: Array},
    orderProductComment:{type: Array},
    orderProductQuantity:{ type: Array},
    orderProductPrice:{ type: Array},
    paymentMethod:{type:String},
    customerFullName:{type:String},
    phone:{type:String},
    email:{type:String},
    shippingAddress:{type:String},
    deliveryNote:{type:String},
    city:{type:String},
    province:{type:String},
    postalCode:{type:String},
    shippingDetail:{type:String}

},{
    
    collection: 'orders'   
})



module.exports = mongoose.model('Order', Order);
