import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPregnancycategoryComponent } from './inventory-pregnancycategory.component';

describe('InventoryPregnancycategoryComponent', () => {
  let component: InventoryPregnancycategoryComponent;
  let fixture: ComponentFixture<InventoryPregnancycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryPregnancycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryPregnancycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
