import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{OrderService} from '../order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items;
  order;
  constructor(private cartService: CartService,private orderService:OrderService , private router: Router
    ) { }
  makeOrder(){
    this.order=this.orderService.addOrder(1,1,1,21,1,1,'lala',20,'2019-10-11');
    this.router.navigate(['shipping']);
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    }

}
