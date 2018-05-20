import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteManagerCommentComponent } from './delete-manager-comment.component';

describe('DeleteManagerCommentComponent', () => {
  let component: DeleteManagerCommentComponent;
  let fixture: ComponentFixture<DeleteManagerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteManagerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteManagerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
