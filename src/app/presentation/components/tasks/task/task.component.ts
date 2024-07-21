import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TasksService } from '../../../../data';

import { Task } from '../../../../domain/models';

import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private taskService = inject(TasksService);

  @Input({ required: true }) task!: Task;

  onCompletedTask(): void {
    this.taskService.removeTask(this.task.id);
  }
}
