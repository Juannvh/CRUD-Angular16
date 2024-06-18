import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users: User[] = [];
  selectedUser: User | undefined;
  searchTerm: string = '';
 
  constructor(private userService: UserService) { }



  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    console.log("loadUsers");
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser(): void {
    const newUser: User = { id: 0, name: 'Pedro Torres', email: 'pedroTorres@gmail.com' };
    this.userService.createUser(newUser).subscribe(user => {
      this.users.push(user);
      console.log('Usuario añadido:', user);
    });

  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe(success => {
      if (success) {
        this.users = this.users.filter(u => u.id !== user.id);
      }
    });
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }

  updateUser(user: User): void {
      user.name = 'Nombre Actualizado';
      this.userService.updateUser(user).subscribe(success => {
        if(success) {

        }
      })    
  }
}
