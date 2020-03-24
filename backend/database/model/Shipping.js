const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Shipping=new Schema({
    order_id:{type:String},
    customer_id:{type:String},
    name:{type:String},
    email:{type:String},
    street:{type:String},
    city:{type:String},
    province:{type:String},
    postcode:{type:String},
    phone:{type:String},
    payment:{type:String}
    },{
    collection: 'Shipping'   
})

module.exports = mongoose.model('Shipping', Shipping);