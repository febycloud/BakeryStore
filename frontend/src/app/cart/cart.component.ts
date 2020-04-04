import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{OrderService} from '../order.service';
import { FormGroup, FormBuilder, FormControl, FormArray} from '@angular/forms';
import {Router} from '@angular/router';
import {Order, orderProducts} from '../Order';
import { empty } from 'rxjs';
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

  constructor(private fb: FormBuilder,private cartService: CartService,private orderService:OrderService , private router: Router
    ) {this.createForm();}
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
    status:['TobeConfirmd'],
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
    shippingDetail:[''],
  })
}

get ProductOrder(){
  return this.angForm.controls['orderProducts'] as FormArray;
}

  makeOrder(){
   //this.order=this.orderService.addOrder(123,'TobeConfirmd',11,2,14,new Date(),[1,'cake',false,false,'no sugar',3,66],'Visa','nami',224,'aaa@a.com','aaa1 st','lala','waterloo','lamu','n2bbcd','');
    setTimeout(()=>this.router.navigate(['success']),500);
  }
  orders=[];
makeItem(item){
  
  console.log(this.orders);
}
 

  ngOnInit() {
    console.log(this.angForm.value);
    this.items = this.cartService.getItems();
    console.log(this.items);
    
    
   
    for(let i of this.items){
      console.log(i.name);
      this.ProductOrder.push(new FormGroup({
      productName:new FormControl(i.name),
      isDonation:new FormControl(null),
      isGift:new FormControl(null),
      comment:new FormControl(null),
      price:new FormControl(i.price),
      quantity:new FormControl(null),
      }),)
      
    }
    console.log(this.angForm.value);
    console.log(this.ProductOrder.controls);
    }
   
  

}
