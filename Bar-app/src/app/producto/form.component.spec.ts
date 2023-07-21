import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentPr } from './form.component';

describe('FormComponent', () => {
  let component: FormComponentPr;
  let fixture: ComponentFixture<FormComponentPr>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponentPr]
    });
    fixture = TestBed.createComponent(FormComponentPr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
