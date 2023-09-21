import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: any = [];
  constructor(private employeesService: EmployeesService) {
    this.getEmployeeList();
  }
  ngOninit(): void {
    debugger
   
    
  }
  getEmployeeList()
  {
debugger
    this.employeesService.getAllemployees()
    .subscribe({
      next: (employees:any) => { 
        this.employees =employees;
      },
      error:(response: any) => {
        console.log(response);
      }
    })
  }


}
