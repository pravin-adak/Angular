import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newEmployee } from '../new-employee/newEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  baseurl:string = 'http://localhost:3000/newemployees';
  constructor(private http : HttpClient) { }
  fetchAllEmployees():Observable<newEmployee[]>{
    return this.http.get<newEmployee[]>(this.baseurl);
  }
}
