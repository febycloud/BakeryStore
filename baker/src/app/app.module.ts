import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ItemcardComponent } from './itemcard/itemcard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import {MatTableModule} from '@angular/material/table';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SuccessComponent } from './success/success.component';
import { IndexComponent } from './index/index.component';
const appRoutes: Routes = [
  { path: 'ourstory', component: OurstoryComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'sales', component: ItemcardComponent },
  { path: 'products/:id', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipment', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OurstoryComponent,
    ContactusComponent,
    ItemcardComponent,
    DetailsComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent,
    IndexComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
