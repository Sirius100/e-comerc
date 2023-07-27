import { Component, Input } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct 
  details = false
  circle = faCircleInfo


}
