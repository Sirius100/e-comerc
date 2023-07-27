import { Component, Input, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Basket, PropertyItem } from '../../models/basket'
import { StorBasketService } from '../../services/stor-basket.service'

@Component({
  selector: 'app-arrow-up-down',
  templateUrl: './arrow-up-down.component.html',
  styleUrls: ['./arrow-up-down.component.scss'],
})
export class ArrowUpDownComponent implements OnInit{
  constructor( private storBasketService: StorBasketService) {}

  count = 1
  product_basket: boolean = false //отвечает за смену background кнопки корзины
  cart = faCartPlus // тип иконки корзины
  basket_user: PropertyItem
  full_basket: Basket
  
  countUp() {
    this.count += 1
  }

  countDown() {
    if(this.count === 1) return
    this.count -= 1
  }

  addProductBuy() {
    this.product_basket = true;
    this.basket_user = {
      title_pos: this.title,
      price_pos: this.price,
      image_pos: this.image,
      count_pos: this.count
    }
    this.storBasketService.addData(this.id, this.basket_user)
  }
  ngOnInit(): void {
    this.full_basket = this.storBasketService.getData()
  }
  
  @Input() id: number
  @Input() title: string
  @Input() price: number
  @Input() image: string
}
