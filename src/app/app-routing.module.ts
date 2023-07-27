import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowcaseComponent } from './components/showcase/showcase.component'
import { BasketProductsComponent } from './components/basket-products/basket-products.component'

const routes: Routes = [
  { path: "app-showcase", component: ShowcaseComponent },
  { path: "app-basket-products", component: BasketProductsComponent },
  { path: "", component: ShowcaseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }
