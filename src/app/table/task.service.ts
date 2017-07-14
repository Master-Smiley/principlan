import { Task } from './task.model';

export class TaskService{
	private tasks: Task[] = [
		{id: 1, task_name: "task name", start_date: "start date", end_date: "end date", progress: 1}
	];

	getTasks(){
		return this.tasks;
	};
}