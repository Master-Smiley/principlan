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
	progressUp: any;
	progressDown: any;
	isHundred: any;
	rowColor: any;
	t: Task;


  constructor(private taskService: TaskService ) {};

  ngOnInit() {
  	this.tasks = this.taskService.getTasks();

  	this.progressUp = function(t: Task) {
  		if (t.progress < 100) {
  			t.progress += 10;
  		}
  	}

  	this.progressDown = function(t: Task) {
  		if (t.progress > 0) {
  			t.progress -= 10;
  		}
  	}

  	this.rowColor = function(t: Task) {
  		if (t.progress === 100) {
  			return "bg-success";
  		} else {
  			return "";
  		}
  	}

  }

}