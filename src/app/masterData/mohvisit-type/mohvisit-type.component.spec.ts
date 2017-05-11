import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MOHVisitTypeComponent } from './mohvisit-type.component';

describe('MOHVisitTypeComponent', () => {
  let component: MOHVisitTypeComponent;
  let fixture: ComponentFixture<MOHVisitTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MOHVisitTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MOHVisitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
