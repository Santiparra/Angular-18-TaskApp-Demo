import { Component } from '@angular/core';

import { User } from './domain/models/user.model';

import { HeaderComponent } from './presentation/components/header/header.component';
import { UserComponent } from "./presentation/components/user/user.component";
import { DUMMY_USERS } from './presentation/utils/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-18-TaskApp-Demo';
  users: User[] = DUMMY_USERS;

  onSelectUser(id: string): void {
    console.log('User selected: ' + id);
  }
}
