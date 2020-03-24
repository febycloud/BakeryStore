import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:4000/orders';

  constructor(private http: HttpClient) { }

  addOrder(order_id,customer_id,subtotal,tax,item_id,quantity,comment,total,date) {
    const obj = {
        order_id,customer_id,subtotal,tax,item_id,quantity,comment,total,date
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}