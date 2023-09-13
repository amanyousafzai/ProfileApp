import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsLibraryComponent } from './charts-library.component';

describe('ChartsLibraryComponent', () => {
  let component: ChartsLibraryComponent;
  let fixture: ComponentFixture<ChartsLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsLibraryComponent]
    });
    fixture = TestBed.createComponent(ChartsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
