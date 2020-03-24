import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ShippingService} from '../shipping.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private shippingService:ShippingService,private router: Router) {
    this.createForm();
  }
  createForm(){
    this.angForm=this.fb.group({
    order_id:['1',Validators.required],
    customer_id:['1',Validators.required],
    name:['',Validators.required],
    email:['',Validators.required],
    street:['',Validators.required],
    city:['',Validators.required],
    province:['',Validators.required],
    postcode:['',Validators.required],
    phone:['',Validators.required],
    payment:['Visa',Validators.required]
    });
  }

  addShipping(order_id,customer_id,name,email,street,city,province,postcode,phone,payment){
    this.shippingService.addShipping(order_id,customer_id,name,email,street,city,province,postcode,phone,payment);
    setTimeout(()=>this.router.navigate(['success']),500);
  }

  ngOnInit(): void {
  }

}
