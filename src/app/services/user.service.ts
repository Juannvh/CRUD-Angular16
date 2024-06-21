import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', username: 'johndoe'},
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', username: 'janesmith' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', username: 'michaelj' },
    { id: 4, name: 'Emily Brown', email: 'emily.brown@example.com', username: 'emilyb' },
    { id: 5, name: 'Daniel Martinez', email: 'daniel.martinez@example.com', username: 'danmartinez' },
    { id: 6, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', username: 'sarahw' },
    { id: 7, name: 'Christopher Anderson', email: 'christopher.anderson@example.com', username: 'chrisand' },
    { id: 8, name: 'Jessica Garcia', email: 'jessica.garcia@example.com', username: 'jessicag' },
    { id: 9, name: 'David Lopez', email: 'david.lopez@example.com', username: 'davidl' },
    { id: 10, name: 'Lisa Taylor', email: 'lisa.taylor@example.com', username: 'lisat' },
  ];

  constructor() { }

  getUsers() {
    return this.userList;
  }

  deleteUser(id: number) {
    const index = this.userList.findIndex(u => u.id === id);
    if (index !== -1) {
      this.userList.splice(index, 1);
      return of(true);
    }
    return of(false);
  }


  // getUsers(): Observable<User[]> {
  //   return of(this.userList);
  // }

  addUser(user : User) {
    user.id = this.addId();
    this.userList.unshift(user);
  }
  
  getUserById(id: number): Observable<User | undefined> {
    const user = this.userList.find(u => u.id === id);
    return of(user);
  }

  updateUser(user: User): Observable<User | undefined> {

    const index = this.userList.findIndex(u => u.id === user.id);
    this.userList[index] = user;
    return of(user);
  }
  private addId(): number {
    if(this.userList.length > 0) {
      let maxId = Math.max(...this.userList.map(u => u.id));
      return maxId + 1;
    } else {
      return 1;
    }
  }
  // createUser(user: User): Observable<User> {
  //   console.log('Creando usuario:', user);
  //   user.id = this.sumarId();
  //   console.log('Usuario creado:', user);
  //   return of(user);
  // }

  // private sumarId(): number {
  //   if(this.users.length > 0) {
  //     let maxId = Math.max(...this.users.map(u => u.id));
  //     return maxId + 1;
  //   } else {
  //     return 1;
  //   }
  // }

  // deleteUser(id: number): Observable<boolean> {
  //   const index = this.users.findIndex(u => u.id === id);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //     return of(true);
  //   }
  //   return of(false);
  // }



  // getUserById(id: number): Observable<User | undefined> {
  //   const user = this.users.find(u => u.id === id);
  //   return of(user);
  // }
}
