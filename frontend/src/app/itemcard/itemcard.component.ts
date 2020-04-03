import { Component,OnInit} from '@angular/core';
//import{items, Product} from '../products';
import{ProductService} from '../product.service';
import { CartService } from '../cart.service';
import{Product} from'../Products';
@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent implements OnInit  {
  items:Product[];

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  constructor(private cartService: CartService,private ms:ProductService) { }

  ngOnInit(){
    this.ms.getProducts().subscribe((data:Product[])=>{
      this.items=data;
      console.log(this.items);
    });
  }
}
