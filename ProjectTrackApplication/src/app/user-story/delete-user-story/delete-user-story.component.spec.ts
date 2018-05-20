import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserStoryComponent } from './delete-user-story.component';

describe('DeleteUserStoryComponent', () => {
  let component: DeleteUserStoryComponent;
  let fixture: ComponentFixture<DeleteUserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
