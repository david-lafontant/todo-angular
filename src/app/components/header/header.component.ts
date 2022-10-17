import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'ToDo App';
  showAddTask!: boolean;
  subscription: Subscription = new Subscription;
  constructor( private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value: boolean) =>(this.showAddTask = value));
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
