import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTopComponent } from './button-top.component';

describe('ButtonTopComponent', () => {
  let component: ButtonTopComponent;
  let fixture: ComponentFixture<ButtonTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTopComponent]
    });
    fixture = TestBed.createComponent(ButtonTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
