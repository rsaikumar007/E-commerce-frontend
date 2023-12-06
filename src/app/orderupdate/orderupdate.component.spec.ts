import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderupdateComponent } from './orderupdate.component';

describe('OrderupdateComponent', () => {
  let component: OrderupdateComponent;
  let fixture: ComponentFixture<OrderupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
