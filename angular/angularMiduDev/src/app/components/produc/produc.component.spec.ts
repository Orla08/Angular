import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducComponent } from './produc.component';

describe('ProducComponent', () => {
  let component: ProducComponent;
  let fixture: ComponentFixture<ProducComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducComponent]
    });
    fixture = TestBed.createComponent(ProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
