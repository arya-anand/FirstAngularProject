import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { UserStoryService } from '../../services/user-story.service';

@Component({
  selector: 'app-edit-user-story',
  templateUrl: './edit-user-story.component.html',
  styleUrls: ['./edit-user-story.component.css']
})
export class EditUserStoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private projectService: ProjectService, private userStoryService: UserStoryService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');
  projects;
  story={
    story:"",
    projId:null
  };

  ngOnInit() {

     // load projects
    
     this.projectService.getAllProjects();
    
     this.projectService.projects$.subscribe(
       data => {
         this.projects = data;
         console.log(this.projects);
       }
     );
 
     this.projectService.ErrorResponse$.subscribe(
       message => {
         console.log(message);
         alert(message);
       }
     );    
 
     this.formData = new FormGroup({
       story: new FormControl('', [Validators.required]),
       projId: new FormControl('', [Validators.required]),
     });
     console.log(this.formData);

    //load story by id
    this.userStoryService.getAllUserStoryById(this.id);

    this.userStoryService.story$.subscribe(
      data => {
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

    this.formData = new FormGroup({
      story: new FormControl('', []),
      projId: new FormControl('', []),
    });
    console.log(this.formData);
  }

  onClickSubmit(story) {
    this.http.put(`http://localhost:64862/api/UserStory/${this.id}`, story).subscribe(
      data => {
        console.log("Saved Successfully !!!");
        this.router.navigate(['/userStory/showUserStory'])
      }
    )

    this.userStoryService.editUserStory(this.id, story);

    this.userStoryService.response$.subscribe(
      data => {
        console.log("UserStory Updated successfully !!!");
        this.router.navigate(['/userStory/showUserStory'])
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