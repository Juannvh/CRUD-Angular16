import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private dbPath = 'users';
  usersRef: AngularFirestoreCollection<User>;

  userList: User[] = [
    { id: "1", name: 'User1', username: 'user1', email: 'user1@example.com' },
    { id: "2", name: 'User2', username: 'user2', email: 'user2@example.com' }
  ];
  
  constructor(private db: AngularFirestore) { 
    this.usersRef = db.collection(this.dbPath);
  }

  // Método para obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.db.collection<User>('users').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {...data, id };
      }))
    );
  }

  // Método para actualizar un usuario
  updateUser(id: string, user: User): Promise<void> {
    return this.db.doc(`users/${id}`).update(user);
  }

  // Método para eliminar un usuario
  deleteUser(id: string): Promise<void> {
    return this.db.doc(`users/${id}`).delete();
  }

  // Método para agregar un nuevo
   addUser(user: User): any {
    return this.usersRef.add({ ...user });
  }

  // Método para obtener los detalles
  getUserById(id: string): Observable<User> {
    return this.db.doc<User>(`users/${id}`).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as User;
        const uid = action.payload.id;
        return { id: id, ...data };
      })
    );
  }
}
