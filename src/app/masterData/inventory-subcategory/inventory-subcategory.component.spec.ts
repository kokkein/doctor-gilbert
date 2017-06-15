import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySubcategoryComponent } from './inventory-subcategory.component';

describe('InventorySubcategoryComponent', () => {
  let component: InventorySubcategoryComponent;
  let fixture: ComponentFixture<InventorySubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
