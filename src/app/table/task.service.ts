import { Task } from './task.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService{
	private tasks: Task[] = [
		{id: 1, task_name: "task name", start_date: "start date", end_date: "end date", progress: 0},
		{id: 1, task_name: "task name", start_date: "start date", end_date: "end date", progress: 0},
		{id: 1, task_name: "task name", start_date: "start date", end_date: "end date", progress: 0},
		{id: 1, task_name: "task name", start_date: "start date", end_date: "end date", progress: 0}
	];

	getTasks(){
		return this.tasks;
	};

};