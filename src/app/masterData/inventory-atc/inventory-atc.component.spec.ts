import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAtcComponent } from './inventory-atc.component';

describe('InventoryAtcComponent', () => {
  let component: InventoryAtcComponent;
  let fixture: ComponentFixture<InventoryAtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
