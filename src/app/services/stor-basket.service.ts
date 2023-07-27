import { Injectable } from '@angular/core';
import { Basket, PropertyItem } from '../models/basket'

@Injectable({
  providedIn: 'root'
})
export class StorBasketService {

  constructor() { }

  private data: Basket = {}
  getData(): Basket {
    return this.data
  }

  addData(id: number, position: PropertyItem): void {
    this.data[id] = position
  }
}
