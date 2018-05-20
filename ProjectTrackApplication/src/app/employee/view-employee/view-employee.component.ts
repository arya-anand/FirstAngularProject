import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  formData: FormGroup;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  id = this.route.snapshot.paramMap.get('id');

  employee = {
    empId: null,
    empName: "",
    designation: "",
    contactNo: null,
    emailId: "",
    skillSet: "",
    managerId: null
  };

  ngOnInit() {

    this.employeeService.getAllEmployeeById(this.id);

    this.employeeService.employee$.subscribe(
      data => {
        this.employee.empId = data['empId'];
        this.employee.empName = data['empName'];
        this.employee.designation = data['designation'];
        this.employee.contactNo = data['contactNo'];
        this.employee.emailId = data['emailId'];
        this.employee.skillSet = data['skillSet'];
        this.employee.managerId = data['managerId'];

        console.log(this.employee);

        this.formData = new FormGroup({
          empName: new FormControl(this.employee.empName, []),
          designation: new FormControl(this.employee.designation, []),
          contactNo: new FormControl(this.employee.contactNo, []),
          emailId: new FormControl(this.employee.emailId, []),
          skillSet: new FormControl(this.employee.skillSet, []),
          managerId: new FormControl(this.employee.managerId, []),
        });
      }
    );

    this.employeeService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );

    this.formData = new FormGroup({
      empName: new FormControl('', []),
      designation: new FormControl('', []),
      contactNo: new FormControl('', []),
      emailId: new FormControl('', []),
      skillSet: new FormControl('', []),
      managerId: new FormControl('', []),
    });
    console.log(this.formData);
  }


}
