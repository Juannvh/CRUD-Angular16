import { Injectable } from '@angular/core';
import { User } from './models/user';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users: User[]  = [
    { id: 1, name: 'Juan Perez', email: 'juanperez@gmail.com' },
  ]

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  createUser(user: User): Observable<User> {
    console.log('Creando usuario:', user);
    user.id = this.sumarId();
    console.log('Usuario creado:', user);
    return of(user);
  }

  private sumarId(): number {
    if(this.users.length > 0) {
      let maxId = Math.max(...this.users.map(u => u.id));
      return maxId + 1;
    } else {
      return 1;
    }
  }

  deleteUser(id: number): Observable<boolean> {
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  updateUser(user: User): Observable<User | undefined> {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index] = user;
    return of(user);
  }

}
