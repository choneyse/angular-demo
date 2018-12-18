import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatSubHeaderComponent } from './sub-header.component';

describe('FatSubHeaderComponent', () => {
  let component: FatSubHeaderComponent;
  let fixture: ComponentFixture<FatSubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FatSubHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
