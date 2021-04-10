import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  name:String;
  email:string
  constructor() { }

  ngOnInit(): void {
  }
  
  saveEmployee(employee:NgForm){
    console.log(employee.value);
  }
}
