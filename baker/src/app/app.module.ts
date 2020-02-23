import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';

import {MatTabsModule} from '@angular/material/tabs';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { ContactusComponent } from './contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OurstoryComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
