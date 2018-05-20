import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManagerCommentComponent } from './show-manager-comment.component';

describe('ShowManagerCommentComponent', () => {
  let component: ShowManagerCommentComponent;
  let fixture: ComponentFixture<ShowManagerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowManagerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowManagerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
