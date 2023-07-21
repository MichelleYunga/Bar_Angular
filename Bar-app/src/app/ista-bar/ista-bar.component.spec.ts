import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstaBarComponent } from './ista-bar.component';

describe('IstaBarComponent', () => {
  let component: IstaBarComponent;
  let fixture: ComponentFixture<IstaBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IstaBarComponent]
    });
    fixture = TestBed.createComponent(IstaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
