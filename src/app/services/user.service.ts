import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    // { id: "1", name: 'John Doe', email: 'john.doe@example.com', username: 'johndoe'},
    // { id: "2", name: 'Jane Smith', email: 'jane.smith@example.com', username: 'janesmith' },
    // { id: "3", name: 'Michael Johnson', email: 'michael.johnson@example.com', username: 'michaelj' },
    // { id: "4", name: 'Emily Brown', email: 'emily.brown@example.com', username: 'emilyb' },
    // { id: "5", name: 'Daniel Martinez', email: 'daniel.martinez@example.com', username: 'danmartinez' },
    // { id: "6", name: 'Sarah Wilson', email: 'sarah.wilson@example.com', username: 'sarahw' },
    // { id: "7", name: 'Christopher Anderson', email: 'christopher.anderson@example.com', username: 'chrisand' },
    // { id: "8", name: 'Jessica Garcia', email: 'jessica.garcia@example.com', username: 'jessicag' },
    // { id: "9", name: 'David Lopez', email: 'david.lopez@example.com', username: 'davidl' },
    // { id: "10", name: 'Lisa Taylor', email: 'lisa.taylor@example.com', username: 'lisat' },
  ];

  constructor(private store: AngularFirestore) { }

  // Método para obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.store.collection<User>('users').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {...data, id };
      }))
    );
  }

  // Método para actualizar un usuario
  updateUser(id: string, user: User): Promise<void> {
    return this.store.doc(`users/${id}`).update(user);
  }
  
  // Método para eliminar un usuario
  deleteUser(id: string): Promise<void> {
    return this.store.doc(`users/${id}`).delete();
  }

   // Método para agregar un nuevo
  addUser(user: User): Promise<void> {
    return new Promise((resolve, reject) => {
      this.store.collection('users').add(user)
        .then()
        .catch(error => reject(error));
    });
  }

   // Método para obtener los detalles
  getUserById(id: string): Observable<User> {
    return this.store.doc<User>(`users/${id}`).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as User;
        const uid = action.payload.id;
        return { id: uid, ...data };
      })
    );
  }
}
