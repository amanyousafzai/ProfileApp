import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitememberComponent } from './invitemember.component';

describe('InvitememberComponent', () => {
  let component: InvitememberComponent;
  let fixture: ComponentFixture<InvitememberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitememberComponent]
    });
    fixture = TestBed.createComponent(InvitememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
