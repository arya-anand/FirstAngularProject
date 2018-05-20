import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private http:HttpClient) { }

  tasks;

  ngOnInit() {

    this.taskService.getAllTasks();

    this.taskService.tasks$.subscribe(
      data => {
        this.tasks = data;
        console.log(this.tasks);
      }
    );

    this.taskService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }
}
