import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { UserService } from '../../services/user.service';

import { ActivatedRoute, Router } from '@angular/router'

import { User } from 'src/app/models/user';
import { FilterPipe } from 'src/app/filter.pipe';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class UserListComponent {

  UserList: User[] = [];
  displayedColumns: string[] = ['username', 'name', 'email', 'actions'];

  // dataSource = new MatTableDataSource<User>(this.UserList);
  dataSource!: MatTableDataSource<User>;
  filterValue: string = '';
  
  constructor(private userService: UserService, private router: Router  ) {}

  ngOnInit(): void { 
    this.getUsers();
  }
  
  loadUsers(): void {
    // this.UserList = this._userService.getUsers();
    // this.dataSource = UserList
    // this._userService.getUsers().subscribe(users => {
    //   this.UserList = users;
    // });
  }

  getUsers() {
    this.UserList = this.userService.getUsers();
    this.dataSource = new MatTableDataSource(this.UserList);
  }

  editUser(id: number) {
    this.router.navigate(['/edit', id]);
  }
  deleteUser(id: number) {
    // console.log(id);
    // console.log("borrando");
    // this.userService.deleteUser(user.id).subscribe(success => {
    //   if (success) {
    //     this.users = this.users.filter(u => u.id !== user.id);
    //   }
    // });
    this.userService.deleteUser(id);
    this.getUsers();
  }

  updateUser(id: number) {
      // this.userService.updateUser(id);
  }
  // selectedUser: User | undefined;
  // editUserId?: number;
  // constructor(private userService: UserService, private route: ActivatedRoute,  private router: Router) { }



  // ngOnInit(): void {
  //   this.loadUsers();
  // }

  // loadUsers(): void {
  //   console.log("loadUsers");
  //   this.userService.getUsers().subscribe(users => {
  //     this.users = users;
  //   });
  // }

  // addUser(): void {
  //   const newUser: User = { id: 0, name: 'Pedro Torres', email: 'pedroTorres@gmail.com' };
  //   this.userService.createUser(newUser).subscribe(user => {
  //     this.users.push(user);
  //     console.log('Usuario añadido:', user);
  //   });

  // }

  // deleteUser(user: User): void {
  //   this.userService.deleteUser(user.id).subscribe(success => {
  //     if (success) {
  //       this.users = this.users.filter(u => u.id !== user.id);
  //     }
  //   });
  // }

  // editUser(user: User): void {
  //   this.router.navigate(['/userForm', user.id]);
  // }

  // regresar(user: User): void {
  //   this.router.navigate(['/users']);
  // }
  // updateUser(user: User): void {
  //     user.name = 'Nombre Actualizado';
  //     this.userService.updateUser(user).subscribe(success => {
  //       if(success) {

  //       }
  //     })    
  // }
}
