import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  formData: FormGroup;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id');
  task = {
    taskId: null,
    startDate: "",
    endDate: "",
    completion: "",
    empId: "",
    userStoryId: ""
  };

  ngOnInit() {

    this.taskService.getAllTasksById(this.id);

    this.taskService.task$.subscribe(
      data => {
        this.task.taskId = data['taskId'];
        this.task.startDate = data['startDate'];
        this.task.endDate = data['endDate'];
        this.task.completion = data['completion'];
        this.task.empId = data['empId'];
        this.task.userStoryId = data['userStoryId'];
        this.formData = new FormGroup({
          startDate: new FormControl(this.task.startDate, []),
          endDate: new FormControl(this.task.endDate, []),
          completion: new FormControl(this.task.completion, []),
          empId: new FormControl(this.task.empId, []),
          userStoryId: new FormControl(this.task.userStoryId, []),
        });
        console.log(this.task);
      }
    );

    this.taskService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    this.formData = new FormGroup({
      startDate: new FormControl('', []),
      endDate: new FormControl('', []),
      completion: new FormControl('', []),
      empId: new FormControl('', []),
      userStoryId: new FormControl('', []),
    });
  }

}
