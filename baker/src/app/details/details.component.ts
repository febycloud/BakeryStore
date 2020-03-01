import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  constructor(private route:ActivatedRoute, private cartService: CartService) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = items[+params.get('product.id')];
    });
  }

}
