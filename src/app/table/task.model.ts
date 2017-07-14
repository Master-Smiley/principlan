export class Task {
	public id: number;
	public task_name: string;
	public start_date: string;
	public end_date: string;
	public progress: number;

	constructor(id: number, task_name: string, start_date: string, end_date: string, progress: number){
		this.id = id;
		this.task_name = task_name;
		this.start_date = start_date;
		this.end_date = end_date;
		this.progress = progress;
	}
};