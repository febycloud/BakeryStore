import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../products';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;

  constructor(private route:ActivatedRoute,) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = items[+params.get('product.id')];
    });
  }

}
