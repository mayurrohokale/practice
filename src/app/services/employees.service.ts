import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { employees } from '../models/employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
   baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllemployees() : Observable<employees[]>{
    
      return this.http.get<employees[]>(this.baseApiUrl + '/api/employees');
    
  }

  addEmployee(addEmployeeRequest: employees): Observable<employees>{
  
    return this.http.post<employees>(this.baseApiUrl + '/api/employees', addEmployeeRequest);
  }
}
