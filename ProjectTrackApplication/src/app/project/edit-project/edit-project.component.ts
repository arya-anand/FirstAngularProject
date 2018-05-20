import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  formData: FormGroup;
  constructor(private projectService: ProjectService, private router:Router, private route:ActivatedRoute, private http: HttpClient) { }
  id = this.route.snapshot.paramMap.get('id');
  project = {
    projName: "",
    startDate: "",
    endDate: "",
    clientName: "",
  };

  ngOnInit() {
    
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

  onClickSubmit(project){

    this.projectService.editProject(this.id, project);

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