import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { throwError } from 'rxjs';
import { Todo } from "./models/Todo.model";
import { map } from "rxjs/operators";
@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private _http: HttpClient) {
  }
  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  }
  setTodos(todo: Todo): Observable<Todo> { 
    return this._http.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo);
  }
  editTodo(todo:Todo):Observable<Todo>{
     return this._http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    
    return this._http.delete<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
  }

}