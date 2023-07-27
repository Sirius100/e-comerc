import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service'
import { IProduct } from '../../models/products';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit{

  public products: IProduct[]
  public loading: boolean
  constructor(
    private productService: ProductService,
  )  {}
  
  basked_user: { [index: string] : {
    title_pos: string,
    price_pos: number,
    image_pos: string,
    count_pos: number
  }} = {}

   ngOnInit() {
    this.loading = true
    setTimeout( () => {
      this.productService.getAll()
        .subscribe(( products: IProduct[]) => {
          this.products = products
          this.loading = false
        })
    }, 200)
  }
}
