import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeOfVisitComponent } from './purpose-of-visit.component';

describe('PurposeOfVisitComponent', () => {
  let component: PurposeOfVisitComponent;
  let fixture: ComponentFixture<PurposeOfVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeOfVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeOfVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
