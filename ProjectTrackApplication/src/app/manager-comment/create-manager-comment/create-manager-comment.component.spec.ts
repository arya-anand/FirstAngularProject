import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagerCommentComponent } from './create-manager-comment.component';

describe('CreateManagerCommentComponent', () => {
  let component: CreateManagerCommentComponent;
  let fixture: ComponentFixture<CreateManagerCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManagerCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManagerCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
