import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

// authentication can b done here

  constructor(private http : HttpClient) { }

  //return http client object to calling function

  Read(path){

    // authentication header
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
    const httpOptions = { headers: headers};
    return this.http.get(path);
  }

  Create(path,object){
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
    const httpOptions = { headers: headers};
    return this.http.post(path,object);
  }

  //for connecting id isnt necessary to be passed here
  Update(path,object){
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
    const httpOptions = { headers: headers};
    return this.http.put(path,object);
  }

  Delete(path){
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json'});
    const httpOptions = { headers: headers};
    return this.http.delete(path);
  }

}
