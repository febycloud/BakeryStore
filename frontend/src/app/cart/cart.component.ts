import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { FormGroup, FormBuilder, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface Province {
  value: string;
  viewValue: string;
}

interface paymentMethod {
  value: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cartService: CartService, 
    private orderService: OrderService, 
    private router: Router) {}
  //display part

  //interface of province option
  provinces: Province[] = [
    { value: 'ON', viewValue: 'Ontario' },
    { value: 'AB', viewValue: 'Alberta' },
    { value: 'BC', viewValue: 'British Columbia' },
    { value: 'QC', viewValue: 'Quebec' }
  ];
  //interface of payment option
  payments: paymentMethod[] = [
    { value: 'Visa' },
    { value: 'MasterCard' },
    { value: 'American Express' }
  ];
  // object for display items in cart
  items;

  //object for add to database
  order = [];

  //object for collect forms
  createForm() {
    this.angForm = this.fb.group({
      status: [''],
      subtotal: 0,
      tax: [],
      total: [],
      date: [],
      orderProducts: this.fb.array([]),
      paymentMethod: [''],
      customerFullName: [''],
      phone: [''],
      email: [''],
      shippingAddress: [''],
      deliveryNote: [''],
      city: [''],
      province: [''],
      postalCode: [''],
    })
  }

  get ProductOrder() {
    return this.angForm.controls['orderProducts'] as FormArray;
  }

  addOrder(subtotal, tax, total, orderProducts, paymentMethod, customerFullName, phone, email, shippingAddress, deliveryNote, city, province, postalCode) {
    this.orderService.addOrder('TobeConfirmed', subtotal, tax, total, new Date(), orderProducts.value, paymentMethod, customerFullName, phone, email, shippingAddress, deliveryNote, city, province, postalCode, '');
    setTimeout(() => this.router.navigate(['success']), 900);
  }

  updateCartSubtotal(): void {
    const forms = this.ProductOrder.controls as FormGroup[];
    const newSubTotal = forms.map(x => +x.get('subbyitem').value)
                             .reduce((acc, val) => acc + val);
    this.angForm.controls.subtotal.setValue(newSubTotal);
  }

  ngOnInit() {
    this.createForm();
  
    this.items = this.cartService.getItems();

    for (let i of this.items) {
      this.ProductOrder.push(new FormGroup({
        productName: new FormControl(i.name),
        isDonation: new FormControl(false),
        isGift: new FormControl(false),
        comment: new FormControl(null),
        price: new FormControl(i.price),
        quantity: new FormControl(0),
        subbyitem: new FormControl(0),
      }))
    }

    const orderProducts: FormArray = this.angForm.get('orderProducts') as FormArray;
    const forms: FormGroup[] = orderProducts.controls as FormGroup[];
    const qtyFormControls: AbstractControl[] = forms.map(x => x.get('quantity'));

    qtyFormControls.forEach(qfc => {
      const parent: FormGroup = qfc.parent as FormGroup;
      const subscription = qfc.valueChanges.subscribe(qty => {
        const price: number = parent.get('price').value;
        parent.get('subbyitem').setValue(qty * price)
        this.updateCartSubtotal();
      });

     this.subscriptions.push(subscription);
    });

  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}


