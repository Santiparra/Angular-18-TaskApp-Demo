import { Component } from '@angular/core';

import { DUMMY_USERS } from '../../utils/dummy-users';

import { User } from '../../../domain/models/user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser: User = DUMMY_USERS[randomIndex];

  get imgAddress(): string {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
