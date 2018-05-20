import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { UserStoryService } from '../../services/user-story.service';

@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-user-story.component.html',
  styleUrls: ['./create-user-story.component.css']
})
export class CreateUserStoryComponent implements OnInit {

  formData: FormGroup;
  constructor(private projectService: ProjectService, private userStoryService: UserStoryService, private http: HttpClient, private router: Router) { }

  projects;

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
 
  }

  onClickSubmit(story) {

    this.userStoryService.createUserStory(story);

    this.userStoryService.response$.subscribe(
      data => {
        console.log("UserStory Created successfully !!!");
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
