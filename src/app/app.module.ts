import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployeesComponent } from './empolyees/listemployees/listemployees.component';
import { CreateEmployeeComponent } from './empolyees/create-employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodosListComponent } from './Todos/todos-list/todos-list.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
    {path:"list",component:ListemployeesComponent},
    {path:"create",component:CreateEmployeeComponent},
    {path:"",redirectTo:"/list",pathMatch:"full"},
    {path:"todos",component:TodosListComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
    TodosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
