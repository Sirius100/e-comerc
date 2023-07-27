import { Component, OnInit } from '@angular/core';
import { StorBasketService } from '../../services/stor-basket.service'
import { Basket, PropertyItem } from '../../models/basket'

@Component({
  selector: 'app-basket-products',
  templateUrl: './basket-products.component.html',
  styleUrls: ['./basket-products.component.scss']
})
export class BasketProductsComponent implements OnInit{
  constructor( private storBasketService: StorBasketService){}
  private item_basket: Basket
  public items: PropertyItem[] = []
  public basket_true_item: boolean // если в корзине есть товар = true

  ngOnInit():void  {
    this.item_basket = this.storBasketService.getData()
    this.basket_true_item = Object.keys(this.item_basket).length > 0 ? true : false
    for( let item in this.item_basket){
      this.items.push(this.item_basket[item])
    }
  }

}
