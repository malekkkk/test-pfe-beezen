import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingStorComponent } from './shopping-stor/shopping-stor.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ShppingCartComponent } from './shpping-cart/shpping-cart.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { BookService } from '../services/book.service'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingStorComponent,
    TopBarComponent,
    ShppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule 
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
