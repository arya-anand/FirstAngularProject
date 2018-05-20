import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagerCommentComponent } from './edit-manager-comment.component';

describe('EditManagerCommentComponent', () => {
  let component: EditManagerCommentComponent;
  let fixture: ComponentFixture<EditManagerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManagerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
