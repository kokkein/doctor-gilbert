import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBrandComponent } from './inventory-brand.component';

describe('InventoryBrandComponent', () => {
  let component: InventoryBrandComponent;
  let fixture: ComponentFixture<InventoryBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
