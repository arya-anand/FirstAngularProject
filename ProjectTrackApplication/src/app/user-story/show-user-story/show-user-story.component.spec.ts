import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserStoryComponent } from './show-user-story.component';

describe('ShowUserStoryComponent', () => {
  let component: ShowUserStoryComponent;
  let fixture: ComponentFixture<ShowUserStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
