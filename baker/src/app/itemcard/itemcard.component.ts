import { Component} from '@angular/core';
import{items} from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent  {
  products = items;
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  constructor(private cartService: CartService) { }
}
