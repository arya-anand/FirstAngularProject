import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  employees;

  ngOnInit() {
    this.employeeService.getAllEmployees();

    this.employeeService.employees$.subscribe(
      data => {
        this.employees = data;
        console.log(this.employees);
      }
    );

    this.employeeService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    
  }

}
