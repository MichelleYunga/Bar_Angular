import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrutasComponent } from './adminrutas.component';

describe('AdminrutasComponent', () => {
  let component: AdminrutasComponent;
  let fixture: ComponentFixture<AdminrutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminrutasComponent]
    });
    fixture = TestBed.createComponent(AdminrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
