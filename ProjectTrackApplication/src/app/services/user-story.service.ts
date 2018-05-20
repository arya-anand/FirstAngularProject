import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {

  baseUrl = 'http://localhost:64862'

  private stories = new Subject<any>();
  stories$ = this.stories.asObservable();

  private story = new Subject<any>();
  story$ = this.story.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService) { }

  getAllUserStories() {
    const url = `${this.baseUrl}/api/UserStory`;
    this.crudService.Read(url).subscribe(
      data => {
        this.stories.next(data);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  getAllUserStoryById(id) {
    const url = `${this.baseUrl}/api/UserStory/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.story.next(data);
      }
    );
  }

  createUserStory(story) {
    const url = `${this.baseUrl}/api/UserStory`;
    this.crudService.Create(url, story).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  editUserStory(id, story) {
    const url = `${this.baseUrl}/api/UserStory/${id}`;
    this.crudService.Update(url, story).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  deleteUserStory(id) {
    const url = `${this.baseUrl}/api/UserStory/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

}
