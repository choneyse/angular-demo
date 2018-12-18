import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatDateComponent } from './fat-date.component';

describe('FatDateComponent', () => {
  let component: FatDateComponent;
  let fixture: ComponentFixture<FatDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
