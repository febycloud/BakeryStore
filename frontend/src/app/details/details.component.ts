import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Products';
import { CartService } from '../cart.service';
import{ProductService} from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:Product;
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  constructor(private route:ActivatedRoute, private cartService: CartService,private ms:ProductService) { }
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ms.getMember(params[`id`]).subscribe((data:Product)=>{
        this.product=data;
      });
    });
    }
  }