import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisMasterComponent } from './diagnosis-master.component';

describe('DiagnosisMasterComponent', () => {
  let component: DiagnosisMasterComponent;
  let fixture: ComponentFixture<DiagnosisMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
