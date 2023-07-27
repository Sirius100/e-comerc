import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketProductsComponent } from './basket-products.component';

describe('BasketProductsComponent', () => {
  let component: BasketProductsComponent;
  let fixture: ComponentFixture<BasketProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketProductsComponent]
    });
    fixture = TestBed.createComponent(BasketProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
