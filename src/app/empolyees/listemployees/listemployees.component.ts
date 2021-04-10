import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeSerice } from '../employee.service';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css'],
  providers:[EmployeeSerice]
})
export class ListemployeesComponent implements OnInit {
  empolyees :Employee[];
  constructor(private _EmployeeService :EmployeeSerice) {
       
   }

  ngOnInit(): void {
    this.empolyees=this._EmployeeService.getEmployee();
    console.log(this.empolyees);

  }

}
