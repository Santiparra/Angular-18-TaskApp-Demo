import { Component, Input } from '@angular/core';

import { dummyTasks } from '../../../data';

import { CreateTask, Task } from '../../../domain';

import { NewTaskComponent } from './new-task';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  tasks: Task[] = dummyTasks;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompletedTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask(): void {
    this.isAddingTask = true;
  }

  onCancelAddTask(): void {
    this.isAddingTask = false;
  }

  onAddTask(newTask: CreateTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    })
    this.onCancelAddTask();
  }

}
