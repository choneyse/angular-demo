import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADollsHouseComponent } from './a-dolls-house.component';

describe('ADollsHouseComponent', () => {
  let component: ADollsHouseComponent;
  let fixture: ComponentFixture<ADollsHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADollsHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADollsHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
