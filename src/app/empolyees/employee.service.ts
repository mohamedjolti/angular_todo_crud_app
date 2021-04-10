import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeSerice{
    getEmployee():Employee[]{
        return 
        [
            {id:1,name:"Mohamed Jolti",gender:"male",email:"mohamed@gmail.com",phone:"0624524",image:"assets/images/emp1.png"},
            {id:2,name:"Joe Tribyani",gender:"male",email:"joe@gmail.com",phone:"0624ddd",image:"assets/images/emp2.png"},
            {id:3,name:"Chnalder Bing",gender:"male",email:"chandler@gmail.com",phone:"06543241",image:"assets/images/emp3.png"}
        ];
    }
}