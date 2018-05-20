import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { UserStoryService } from '../../services/user-story.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  formData: FormGroup;
  constructor(private taskService: TaskService, private employeeService: EmployeeService, private userStoryService: UserStoryService, private http: HttpClient, private router: Router) { }
  employees;
  stories;

  ngOnInit() {

    // load employees

    this.employeeService.getAllEmployees();

    this.employeeService.employees$.subscribe(
      data => {
        this.employees = data;
        console.log(this.employees);
      }
    );

    this.employeeService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    
    // load user stories
    
    this.userStoryService.getAllUserStories();

    this.userStoryService.stories$.subscribe(
      data => {
        this.stories = data;
        console.log(this.employees);
      }
    );

    this.userStoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    

    this.formData = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      completion: new FormControl('', [Validators.required]),
      empId: new FormControl('', [Validators.required]),
      userStoryId: new FormControl('', [Validators.required]),
    });
  }

  onClickSubmit(task) {

    this.taskService.createTask(task);

    this.taskService.response$.subscribe(
      data => {
        console.log("Task Created successfully !!!");
        this.router.navigate(['/task/showTask'])
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