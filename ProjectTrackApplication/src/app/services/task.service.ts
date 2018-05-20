import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = 'http://localhost:64862'

  private tasks = new Subject<any>();
  tasks$ = this.tasks.asObservable();

  private task = new Subject<any>();
  task$ = this.task.asObservable();

  private response = new Subject<any>();
  response$ = this.response.asObservable();

  private ErrorResponse = new Subject<any>();
  ErrorResponse$ = this.ErrorResponse.asObservable();

  constructor(private crudService: CrudService) { }

  getAllTasks() {
    const url = `${this.baseUrl}/api/Task`;
    this.crudService.Read(url).subscribe(
      data => {
        this.tasks.next(data);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  getAllTasksById(id) {
    const url = `${this.baseUrl}/api/Task/${id}`;
    this.crudService.Read(url).subscribe(
      data => {
        this.task.next(data);
      }
    );
  }

  createTask(task) {
    const url = `${this.baseUrl}/api/Task`;
    this.crudService.Create(url, task).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  editTask(id, task) {
    const url = `${this.baseUrl}/api/Task/${id}`;
    this.crudService.Update(url, task).subscribe(
      data => {
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  deleteTask(id) {
    const url = `${this.baseUrl}/api/Task/${id}`;
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