import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{OrderService} from '../order.service';
import {Router} from '@angular/router';

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
  provinces: Province[] = [
    {value: 'ON', viewValue: 'Ontario'},
    {value: 'AB', viewValue: 'Alberta'},
    {value: 'BC', viewValue: 'British Columbia'},
    {value: 'QC', viewValue: 'Quebec'}
  ];

  payments: paymentMethod[] = [
    {value: 'Visa'},
    {value: 'MasterCard'},
    {value: 'American Express'}
  ];

  items;
  order;
  constructor(private cartService: CartService,private orderService:OrderService , private router: Router
    ) { }
  makeOrder(){
    this.order=this.orderService.addOrder(123,'TobeConfirmed',30,3,33,'2020-3-21',[1,2],['cake','duck'],[true,false],[false,true],["","no sugar"],[1,2],[20,6],"Visa","John Mama",1233334567,'abc@aa.com','26 King St','left it at door','waterlo','ON','N2L 7G7','');
    setTimeout(()=>this.router.navigate(['success']),500);
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    }

}
