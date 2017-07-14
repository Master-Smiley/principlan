import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	tasks: any;

  constructor(private taskService: TaskService ) {};

  ngOnInit() {
  	this.tasks = this.taskService.getTasks();
  }

}