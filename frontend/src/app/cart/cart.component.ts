import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{OrderService} from '../order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Order} from '../Order';
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
  model=this.fb.group({
    orderId:[''],
    status:['TobeConfirmd'],
    subtotal:[],
    tax:[],
    total:[],
    date:[],
    orderProductId:this.fb.array([]),
    orderProductName:this.fb.array([]),
    orderProductIsDonation:this.fb.array([]),
    orderProductIsGift:this.fb.array([]),
    orderProductComment:this.fb.array([]),
    orderProductQuantity:this.fb.array([]),
    orderProductPrice:this.fb.array([]),
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
  
  constructor(private fb: FormBuilder,private cartService: CartService,private orderService:OrderService , private router: Router
    ) {}
  makeOrder2(){
    this.order=this.orderService.addOrder(123,'TobeConfirmed',30,3,33,'2020-3-21',[1,2],['a','b'],[true,false],[false,true],["","no sugar"],[1,2],[20,6],"Visa",'lala',1233334567,'abc@aa.com','26 King St','left it at door','waterlo',"ON",'N2L 7G7','');
    setTimeout(()=>this.router.navigate(['success']),500);
  }

  makerOrder(){

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    }
  


}
