const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Product=new Schema({
    _id:{type:String},
    name:{type:String},
    imagePath:{type:String},
    price:{type:Number},
    detail:{type:String},
    isDonation:{type:String},
    isGift:{type:String},
    itemComment:{type:String},
    itemTotal:{type:Number},
    sugarLevel:{type:Number},
    calorieLevel:{type:Number},
    fatLevel:{type:Number},
    allergyContent:{type:String}
},{
collection:'products'
});
module.exports=mongoose.model('Product',Product)