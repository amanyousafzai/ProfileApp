import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailComponent } from './viewdetail.component';

describe('ViewdetailComponent', () => {
  let component: ViewdetailComponent;
  let fixture: ComponentFixture<ViewdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdetailComponent]
    });
    fixture = TestBed.createComponent(ViewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
