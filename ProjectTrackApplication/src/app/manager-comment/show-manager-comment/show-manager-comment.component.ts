import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ManagerCommentService } from '../../services/manager-comment.service';

@Component({
  selector: 'app-show-manager-comment',
  templateUrl: './show-manager-comment.component.html',
  styleUrls: ['./show-manager-comment.component.css']
})
export class ShowManagerCommentComponent implements OnInit {

  constructor(private managerCommentService: ManagerCommentService, private route: ActivatedRoute, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');
  comments;

  ngOnInit() {
    
    this.managerCommentService.getAllCommentsByTaskId(this.id);
    
    this.managerCommentService.comments$.subscribe(
      data => {
        this.comments = data;
        console.log(this.comments);
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
