import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  uri = 'http://localhost:4000/shipping';

  constructor(private http: HttpClient) { }

  addShipping(order_id,customer_id,name,email,street,city,province,postcode,phone,payment){
    const obj = {
        order_id,customer_id,name,email,street,city,province,postcode,phone,payment
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}