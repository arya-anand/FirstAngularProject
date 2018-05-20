import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';
import { ManagerCommentService } from '../../services/manager-comment.service';

@Component({
  selector: 'app-delete-manager-comment',
  templateUrl: './delete-manager-comment.component.html',
  styleUrls: ['./delete-manager-comment.component.css']
})
export class DeleteManagerCommentComponent implements OnInit {

  formData: FormGroup;
  constructor(private managerCommentService: ManagerCommentService, private route:ActivatedRoute, private router:Router, private http: HttpClient) { }
  
  id = this.route.snapshot.paramMap.get('id');
  comment ={
    comment:"",
    projTaskId:null,
  };

  ngOnInit() {

    this.managerCommentService.getAllCommentsById(this.id);

    this.managerCommentService.comment$.subscribe(
      data => {
       
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

    this.formData = new FormGroup({      
      comment: new FormControl('', []),
      projTaskId: new FormControl('', []),
    });

  }

  onClickSubmit(){

    this.managerCommentService.deleteComment(this.id);

    this.managerCommentService.response$.subscribe(
      data => {
        console.log("Comment Deleted successfully !!!");
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