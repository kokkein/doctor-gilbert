import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGenericComponent } from './inventory-generic.component';

describe('InventoryGenericComponent', () => {
  let component: InventoryGenericComponent;
  let fixture: ComponentFixture<InventoryGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
