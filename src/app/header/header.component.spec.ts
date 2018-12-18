import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatHeaderComponent } from './fat-header.component';

describe('FatHeaderComponent', () => {
  let component: FatHeaderComponent;
  let fixture: ComponentFixture<FatHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
