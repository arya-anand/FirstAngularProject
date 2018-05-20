import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private http: HttpClient) { }

  projects;

  ngOnInit() {

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

    this.projectService.getAllProjects();

  }


}
