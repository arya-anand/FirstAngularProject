import { Injectable } from '@angular/core';
import {CrudService} from './crud.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // centralised url
  baseUrl = 'http://localhost:64862'

  // create the subject
  private employees = new Subject<any>();

  // create observer that notifies if any change happens in subject
  // whoever connects to this observer will notify if subject is modified
  employees$ = this.employees.asObservable();

  // to get emp by id
  private employee = new Subject<any>();
  employee$= this.employee.asObservable();

  // to get emp by id
  private response = new Subject<any>();
  response$= this.response.asObservable();

   // subject for error publishing
   private ErrorResponse = new Subject<any>();
   ErrorResponse$= this.ErrorResponse.asObservable();

  constructor(private crudService : CrudService) { }

  getAllEmployees(){
    const url = `${this.baseUrl}/api/Employee`;
    this.crudService.Read(url).subscribe(
      data =>{
        //load it in the subject so that it will be given to next level (observable)
        this.employees.next(data);
      },
      error => {
        console.log(error);
        //now publish the error to the subscriber
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  getAllEmployeeById(id){
    const url = `${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Read(url).subscribe(
      data =>{
        //load it in the subject so that it will be given to next level (observable)
        this.employee.next(data);
      }
    );
  }

  createEmployee(employee){
    const url = `${this.baseUrl}/api/Employee`;
    this.crudService.Create(url,employee).subscribe(
      data => {        
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  editEmployee(id,employee){
    const url = `${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Update(url,employee).subscribe(
      data => {        
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

  deleteEmployee(id){
    const url = `${this.baseUrl}/api/Employee/${id}`;
    this.crudService.Delete(url).subscribe(
      data => {        
        this.response.next(true);
      },
      error => {
        console.log(error);
        this.ErrorResponse.next(error.statusText);
      }
    );
  }

}
