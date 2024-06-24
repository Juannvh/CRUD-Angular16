import { Component, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { User } from 'src/app/models/user';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class UserListComponent implements OnInit{

  users: User[] = [];
  filterValue: string = '';
  dataSource = new MatTableDataSource<User>;
  displayedColumns: string[] = ['name', 'username', 'email', 'actions'];
  constructor(private userService: UserService, private router: Router, private store: AngularFirestore) {}
  
  // Método que se ejecuta al inicializar
  ngOnInit() {
    this.getUsers();    
  }
  
  // Método para obtener usuarios
  getUsers(){
    this.userService.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
    });  
  }
  
  // Método para navegar a la vista de edición
  editUser(id: number) {
    this.router.navigate(['/edit', id]);
  }

  // Método para eliminar un usuario
  deleteUser(id: string) {
   
    this.userService.deleteUser(id);
    this.getUsers();
  }
}
