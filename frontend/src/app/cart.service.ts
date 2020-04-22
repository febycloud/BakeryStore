import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [
    {
      productName: "Test1",
      isDonation: false,
      isGift: false,
      comment: null,
      price: 10,
      quantity: 0,
      subbyitem: 0
    },
    {
      productName: "Test2",
      isDonation: false,
      isGift: false,
      comment: null,
      price: 15,
      quantity: 0,
      subbyitem: 0
    }
  ];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}