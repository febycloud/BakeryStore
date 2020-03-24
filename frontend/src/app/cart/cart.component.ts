import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import{OrderService} from '../order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  order;
  constructor(private cartService: CartService,private orderService:OrderService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.order =this.orderService.addOrder(1,1,1,21,1,1,'lala',20,'2019-10-10');
  }

}
