import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { employees } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  addEmployeeRequest: any = {
    
    name: '',
    email: '',
    phone: 0,
    salary:0,
    department: '',
    };
    constructor(private employeeService: EmployeesService, private router: Router) {

    }

    addEmployee(){
      this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe ({
        next : (employees) => {
        this.router.navigate(['/employees'])
      }
     });  
     
    }

    
}
