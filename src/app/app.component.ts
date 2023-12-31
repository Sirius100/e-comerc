import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { IProduct } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'E-comerc shop'

  products: IProduct[];
  constructor(
    private titleService: Title,
    ){ }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
