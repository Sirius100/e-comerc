import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowUpDownComponent } from './arrow-up-down.component';

describe('ArrowUpDownComponent', () => {
  let component: ArrowUpDownComponent;
  let fixture: ComponentFixture<ArrowUpDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowUpDownComponent]
    });
    fixture = TestBed.createComponent(ArrowUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
