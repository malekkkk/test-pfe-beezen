import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShppingCartComponent } from './shpping-cart/shpping-cart.component';
import { ShoppingStorComponent } from './shopping-stor/shopping-stor.component';


const routes: Routes = [
  { path: '', component: ShoppingStorComponent },
  { path: 'Shopping-Cart', component: ShppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
