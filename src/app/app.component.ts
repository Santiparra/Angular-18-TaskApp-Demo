import { Component } from '@angular/core';

import { DUMMY_USERS } from './data';

import { User } from './domain';

import { HeaderComponent, UserComponent, TasksComponent } from './presentation/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-18-TaskApp-Demo';
  users: User[] = DUMMY_USERS;
  selectedUserId?: string ;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  }
}
