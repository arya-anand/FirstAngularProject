import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManagerCommentComponent } from './view-manager-comment.component';

describe('ViewManagerCommentComponent', () => {
  let component: ViewManagerCommentComponent;
  let fixture: ComponentFixture<ViewManagerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewManagerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManagerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
