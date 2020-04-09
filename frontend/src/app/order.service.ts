import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  addOrder(status,subtotal,tax,total,date,orderProducts,paymentMethod,customerFullName,phone,email,shippingAddress,deliveryNote,city,province,postalCode,shippingDetail) {
    const obj = {
      status,subtotal,tax,total,date,orderProducts,paymentMethod,customerFullName,phone,email,shippingAddress,deliveryNote,city,province,postalCode,shippingDetail
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}