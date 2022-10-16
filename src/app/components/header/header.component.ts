import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'ToDo App';
  showAddTask: boolean;
  subscription: Subscription = new Subscription;
  constructor() { }

  ngOnInit(): void {
  }
  toggleAddTask(){
    console.log("hello");
  }

}
