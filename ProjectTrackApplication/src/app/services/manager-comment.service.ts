import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerCommentService {

  baseUrl = 'http://localhost:64862'

  private comments = new Subject<any>();
  comments$ = this.comments.asObservable();

  private comment = new Subject<any>();
  comment$ = this.comment.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService) { }

  getAllComments() {
    const url = `${this.baseUrl}/api/ManagerComment`;
    this.crudService.Read(url).subscribe(
      data => {
        this.comments.next(data);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  getAllCommentsById(id) {
    const url = `${this.baseUrl}/api/ManagerComment/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.comment.next(data);
      }
    );
  }

  getAllCommentsByTaskId(id) {
    
    const url = `${this.baseUrl}/api/ManagerComment/GetByTaskId/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.comments.next(data);
      }
    );
  }

  createComment(comment) {
    const url = `${this.baseUrl}/api/ManagerComment`;
    this.crudService.Create(url, comment).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  editComment(id, comment) {
    const url = `${this.baseUrl}/api/ManagerComment/${id}`;
    this.crudService.Update(url, comment).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  deleteComment(id) {
    const url = `${this.baseUrl}/api/ManagerComment/${id}`;
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