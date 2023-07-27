import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Title } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule }   from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { ArrowUpDownComponent } from './components/arrow-up-down/arrow-up-down.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BasketComponent } from './components/comeInbasket/comeInbasket.component';
import { BasketProductsComponent } from './components/basket-products/basket-products.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({

  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    ArrowUpDownComponent,
    HeaderComponent,
    FooterComponent,
    BasketComponent,
    BasketProductsComponent,
    ShowcaseComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]// с чего начинается все приложение
})
export class AppModule { }
