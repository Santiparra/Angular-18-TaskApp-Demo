import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CreateTask } from '../../../../domain';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addedTask = new EventEmitter<CreateTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(): void {
    this.addedTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }
}
