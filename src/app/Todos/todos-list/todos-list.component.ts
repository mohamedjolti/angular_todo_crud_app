import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { EmployeeSerice } from 'src/app/empolyees/employee.service';
import { Todo } from '../models/Todo.model';
import { TodoService } from '../TodoService';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
  providers:[TodoService]
})
export class TodosListComponent implements OnInit {
  todos:Todo[];
  title:string;
  deleting:boolean=false;
  editing:boolean=false;
  todo:Todo
    constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(data=>{
      this.todos=data
      console.log(data);
      
    });
  }
  createTodo(){
    console.log(this.title);
    
    let todo:Todo={
      title:this.title,
      userId:500,
      completed:false,
      id:10,
    }
    this.todoservice.setTodos(todo).subscribe(data=>{
      this.todos=[data,...this.todos]
      console.log(data);
      this.title=""
    });
  }
  delete(todo:Todo){
    if(this.deleting==false){
    this.deleting=true;
        this.todoservice.deleteTodo(todo).subscribe(data=>{
          this.todos=this.todos.filter(tod=>tod.id!==todo.id )
          this.deleting=false
        })
      }
  }
  edit(todo:Todo){
    this.editing=true;
    this.todo=todo;
  }
  update(){
    this.todoservice.editTodo(this.todo).subscribe(todo=>{
       this.todos.forEach(tod=>{
         if(tod.id==todo.id){
            tod=todo
         }
       })
       this.todo=new Todo;
       this.editing=false
       console.log(todo);
    })
  
    
  }

} 
