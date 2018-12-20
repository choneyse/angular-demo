import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelousWonderettesComponent } from './marvelous-wonderettes.component';

describe('MarvelousWonderettesComponent', () => {
  let component: MarvelousWonderettesComponent;
  let fixture: ComponentFixture<MarvelousWonderettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelousWonderettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelousWonderettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
