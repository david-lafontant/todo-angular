import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { TASKS } from '../mock-task';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTask(): Observable<Task[]> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const delUri: string = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(delUri);
  }
}
