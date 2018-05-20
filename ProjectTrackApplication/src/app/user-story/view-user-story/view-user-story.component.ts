import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import{Router, ActivatedRoute, ParamMap} from '@angular/router';
import { UserStoryService } from '../../services/user-story.service';

@Component({
  selector: 'app-view-user-story',
  templateUrl: './view-user-story.component.html',
  styleUrls: ['./view-user-story.component.css']
})
export class ViewUserStoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private userStoryService : UserStoryService, private route:ActivatedRoute, private router:Router, private http: HttpClient) { }
  
  id = this.route.snapshot.paramMap.get('id');
  story ={
    userStoryId:null,
    story:"",
    projId:null,
  };

  ngOnInit() {
    
    this.userStoryService.getAllUserStoryById(this.id);

    this.userStoryService.story$.subscribe(
      data => {
        this.story.userStoryId = data['userStoryId'];
        this.story.story = data['story'];
        this.story.projId = data['projId'];
        this.formData = new FormGroup({         
          story: new FormControl(this.story.story, []),
          projId: new FormControl(this.story.projId, []),
        });

      }
    );

    this.userStoryService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }

}