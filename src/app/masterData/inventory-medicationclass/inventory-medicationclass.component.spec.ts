import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryMedicationclassComponent } from './inventory-medicationclass.component';

describe('InventoryMedicationclassComponent', () => {
  let component: InventoryMedicationclassComponent;
  let fixture: ComponentFixture<InventoryMedicationclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryMedicationclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryMedicationclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
