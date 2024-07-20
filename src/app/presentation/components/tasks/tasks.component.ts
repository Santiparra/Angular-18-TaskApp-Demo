import { Component, Input } from '@angular/core';

import { dummyTasks } from '../../../data';

import { Task } from '../../../domain';

import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks: Task[] = dummyTasks;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompletedTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
