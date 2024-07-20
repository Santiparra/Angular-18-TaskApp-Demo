import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../../domain/models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selected = new EventEmitter<string>();

  get imgAddress(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.selected.emit(this.user.id);
  }
}
