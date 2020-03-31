import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SuccessComponent } from './success/success.component';
import { IndexComponent } from './index/index.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import{OrderService} from'../app/order.service';
import { FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps'
const appRoutes: Routes = [
  { path: 'ourstory', component: OurstoryComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'sales', component: ItemcardComponent },
  { path: 'products/:id', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'index', component: IndexComponent },
  
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
    SuccessComponent,
    IndexComponent,
    FooterComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    MatFormFieldModule,
    NgbModule,
    HttpClientModule, 
    ReactiveFormsModule

  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})

export class AppModule { }
