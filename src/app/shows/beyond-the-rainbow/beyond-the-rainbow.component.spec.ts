import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondTheRainbowComponent } from './beyond-the-rainbow.component';

describe('BeyondTheRainbowComponent', () => {
  let component: BeyondTheRainbowComponent;
  let fixture: ComponentFixture<BeyondTheRainbowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyondTheRainbowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyondTheRainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
