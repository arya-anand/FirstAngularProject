import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ManagerCommentService } from '../../services/manager-comment.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-manager-comment',
  templateUrl: './create-manager-comment.component.html',
  styleUrls: ['./create-manager-comment.component.css']
})
export class CreateManagerCommentComponent implements OnInit {
 
  formData: FormGroup;
  constructor(private managerCommentService : ManagerCommentService,  private route: ActivatedRoute, private taskService: TaskService, private http: HttpClient, private router: Router) { }
  id = this.route.snapshot.paramMap.get('id');
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

    this.formData = new FormGroup({
      comment: new FormControl('', [Validators.required]),
    });
    console.log(this.formData);
  }

  onClickSubmit(comment) {

    comment.projTaskId = this.id;
    this.managerCommentService.createComment(comment);

    this.managerCommentService.response$.subscribe(
      data => {
        console.log("Comment Created successfully !!!");
        this.router.navigate(['/task/showTask'])
      }
    );

    this.managerCommentService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }
}

