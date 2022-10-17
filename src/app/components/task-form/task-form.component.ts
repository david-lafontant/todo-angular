import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {UiService } from '../../services/ui.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  text: string ="";
  day: string ="" ;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }


  

  onSubmit() {
 if(this.text === ""){
  return alert("Please enter task");
 }
 const newTask = {
  text: this.text,
  day: this.day,
  reminder: this.reminder
 }
 this.onAddTask.emit(newTask);

 




  this.text = "";
  this.day = "";
  this.reminder = false;

  }
}
