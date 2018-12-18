import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatFeaturedComponent } from './featured.component';

describe('FatFeaturedComponent', () => {
  let component: FatFeaturedComponent;
  let fixture: ComponentFixture<FatFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FatFeaturedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
