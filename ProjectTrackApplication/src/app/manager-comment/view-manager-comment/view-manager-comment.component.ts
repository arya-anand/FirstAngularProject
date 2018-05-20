import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ManagerCommentService } from '../../services/manager-comment.service';

@Component({
  selector: 'app-view-manager-comment',
  templateUrl: './view-manager-comment.component.html',
  styleUrls: ['./view-manager-comment.component.css']
})
export class ViewManagerCommentComponent implements OnInit {

  formData: FormGroup;
  constructor(private managerCommentService: ManagerCommentService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');
  comment = {
    commentId: null,
    comment: "",
    projTaskId: null,
  };


  ngOnInit() {

    this.managerCommentService.getAllCommentsById(this.id);

    this.managerCommentService.comment$.subscribe(
      data => {
        this.comment.commentId = data['commentId'];
        this.comment.comment = data['comment'];
        this.comment.projTaskId = data['projTaskId'];
        this.formData = new FormGroup({
          comment: new FormControl('', []),
          projTaskId: new FormControl('', []),
        });

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