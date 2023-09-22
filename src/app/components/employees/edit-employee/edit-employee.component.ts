import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

    constructor(private rote: ActivatedRoute) {}

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        
        if(id) {
          
        }
      
      }
    })

}
