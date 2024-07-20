import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../../../../domain/models';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completed = new EventEmitter<string>();

  onCompletedTask(): void {
    this.completed.emit(this.task.id);
  }
}
