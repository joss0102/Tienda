import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedOrderComponent } from './added-order.component';

describe('AddedOrderComponent', () => {
  let component: AddedOrderComponent;
  let fixture: ComponentFixture<AddedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
