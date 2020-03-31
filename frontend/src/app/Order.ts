export class Order{
constructor(
    public orderId:String,
    public status:String,
    public subtotal:Number,
    public tax:Number,
    public total:Number,
    public date:Date,
    public orderProducts=new Array<orderProducts>(),  
    public paymentMethod:String,
    public customerFullName:String,
    public phone:String,
    public email:String,
    public shippingAddress:String,
    public deliveryNote:String,
    public city:String,
    public province:String,
    public postalCode:String,
    public shippingDetail:String){}
}

export class orderProducts{
    constructor( Id:String,
                 productName:String,
                 isDonation:Boolean,
                 isGift:Boolean,
                 comment:String,
                 price:Number,
                 quantity:Number

    ){}
}