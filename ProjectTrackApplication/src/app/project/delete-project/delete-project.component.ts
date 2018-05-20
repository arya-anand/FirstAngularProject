import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  formData: FormGroup;
  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');

  project = {
    projName: "",
    startDate: "",
    endDate: "",
    clientName: "",
  };

  ngOnInit() {

    // load project

    this.projectService.getAllProjectsById(this.id);

    this.projectService.project$.subscribe(
      data => {
        this.project.projName = data['projName'];
        this.project.startDate = data['startDate'];
        this.project.endDate = data['endDate'];
        this.project.clientName = data['clientName'];

        this.formData = new FormGroup({
          projName: new FormControl(this.project.projName, []),
          startDate: new FormControl(this.project.startDate, []),
          endDate: new FormControl(this.project.endDate, []),
          clientName: new FormControl(this.project.clientName, []),
        });
        console.log(this.project);
      }
    );

    this.projectService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    this.formData = new FormGroup({
      projName: new FormControl('', []),
      startDate: new FormControl('', []),
      endDate: new FormControl('', []),
      clientName: new FormControl('', []),
    });

  }

  onClickSubmit() {

    this.projectService.deleteProject(this.id);

    this.projectService.response$.subscribe(
      data => {
        console.log("Project Deleted successfully !!!");
        this.router.navigate(['/project/showProject'])
      }
    );

    this.projectService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

  }

}
