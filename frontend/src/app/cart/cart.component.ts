import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{OrderService} from '../order.service';
import { FormGroup, FormBuilder, FormControl, FormArray} from '@angular/forms';
import {Router} from '@angular/router';
import {Order, orderProducts} from '../Order';
import { empty } from 'rxjs';
import { summaryFileName } from '@angular/compiler/src/aot/util';
interface Province {
  value: string;
  viewValue: string;
}

interface paymentMethod {
  value: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit {
   angForm: FormGroup;
   subtotal:number;
  constructor(private fb: FormBuilder,private cartService: CartService,private orderService:OrderService , private router: Router
    ) {this.createForm();
    }
  //display part
  
  //interface of province option
  provinces: Province[] = [
    {value: 'ON', viewValue: 'Ontario'},
    {value: 'AB', viewValue: 'Alberta'},
    {value: 'BC', viewValue: 'British Columbia'},
    {value: 'QC', viewValue: 'Quebec'}
  ];
//interface of payment option
  payments: paymentMethod[] = [
    {value: 'Visa'},
    {value: 'MasterCard'},
    {value: 'American Express'}
  ];
  // object for display items in cart
  items;

  //object for add to database
  order;

  //object for collect forms
  createForm(){
  this.angForm=this.fb.group({
    status:[''],
    subtotal:[],
    tax:[],
    total:[],
    date:[],
    orderProducts:this.fb.array([]),
    paymentMethod:[''],
    customerFullName:[''],
    phone:[''],
    email:[''],
    shippingAddress:[''],
    deliveryNote:[''],
    city:[''],
    province:[''],
    postalCode:[''],
  })
}


get ProductOrder(){
  return this.angForm.controls['orderProducts'] as FormArray;
}

  addOrder(subtotal,tax,total,orderProducts,paymentMethod,customerFullName,phone,email,shippingAddress,deliveryNote,city,province,postalCode){
   this.orderService.addOrder('TobeConfirmed',subtotal,tax,total,new Date(),orderProducts.value,paymentMethod,customerFullName,phone,email,shippingAddress,deliveryNote,city,province,postalCode,'');
    setTimeout(()=>this.router.navigate(['success']),900);
  }
  orders=[];

  ngOnInit() {
    this.items = this.cartService.getItems();

    
    for(let i of this.items){
      this.ProductOrder.push(new FormGroup({
      productName:new FormControl(i.name),
      isDonation:new FormControl(false),
      isGift:new FormControl(false),
      comment:new FormControl(null),
      price:new FormControl(i.price),
      quantity:new FormControl(0),
      subbyitem:new FormControl(0),
      }),)
 }

 var qtyFormControls = this.ProductOrder.controls.map(x => x.get('quantity'));

   

    this.ProductOrder.valueChanges.subscribe(value => {
      var qtyFormControls = this.ProductOrder.controls.map(x => x.get('quantity'));
      console.log(qtyFormControls)

      
   })
   console.log(this.subtotal);

    }
   
  

}
