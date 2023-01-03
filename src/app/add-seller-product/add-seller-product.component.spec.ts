import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellerProductComponent } from './add-seller-product.component';

describe('AddSellerProductComponent', () => {
  let component: AddSellerProductComponent;
  let fixture: ComponentFixture<AddSellerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSellerProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSellerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
