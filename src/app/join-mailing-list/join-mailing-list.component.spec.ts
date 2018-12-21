import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMailingListComponent } from './join-mailing-list.component';

describe('JoinMailingListComponent', () => {
  let component: JoinMailingListComponent;
  let fixture: ComponentFixture<JoinMailingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinMailingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMailingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
