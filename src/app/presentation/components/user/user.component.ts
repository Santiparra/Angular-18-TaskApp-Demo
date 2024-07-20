import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

import { User } from '../../../domain/models/user.model';

import { DUMMY_USERS } from '../../utils/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser: WritableSignal<User> = signal(DUMMY_USERS[randomIndex]);
  imgAddress: Signal<string> = computed(
    () => 'assets/users/' + this.selectedUser().avatar
  );

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
