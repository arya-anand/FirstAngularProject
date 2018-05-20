import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { UserStoryService } from '../../services/user-story.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  formData: FormGroup;
  constructor(private taskService: TaskService,  private employeeService: EmployeeService, private userStoryService: UserStoryService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id');
  task={
    startDate:"",
    endDate:"",
    completion:"",
    empId:null,
    userStoryId:null,
  };
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

     // load task by id
    this.taskService.getAllTasksById(this.id);

    this.taskService.task$.subscribe(
      data => {
        this.task.startDate = data['startDate'];
        this.task.endDate = data['endDate'];
        this.task.completion = data['completion'];
        this.task.empId = data['empId'];
        this.task.userStoryId = data['userStoryId'];

        console.log(this.task);

        this.formData = new FormGroup({
          startDate: new FormControl(this.task.startDate, [Validators.required]),
          endDate: new FormControl(this.task.endDate, [Validators.required]),
          completion: new FormControl(this.task.completion, []),
          empId: new FormControl(this.task.empId, [Validators.required]),
          userStoryId: new FormControl(this.task.userStoryId, [Validators.required]),
        });

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

  onClickSubmit(task) {

    this.taskService.editTask(this.id, task);

    this.taskService.response$.subscribe(
      data => {
        console.log("Task Deleted successfully !!!");
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