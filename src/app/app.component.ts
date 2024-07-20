import { Component } from '@angular/core';

import { User } from './domain/models/user.model';

import { DUMMY_USERS } from './data/dummy-users';

import { HeaderComponent } from './presentation/components/header/header.component';
import { UserComponent } from "./presentation/components/user/user.component";
import { TasksComponent } from "./presentation/components/tasks/tasks.component";



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
