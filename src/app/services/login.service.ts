import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import { Auth }  from '@angular/fire/auth';

// import { Auth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor( private auth: AngularFireAuth, private router: Router) {}
  
  
  async register({ email, password }: any) {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  }

  async login({ email, password }: any) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  // loginWithGoogle() {
  //   return signInWithPopup(this.auth, new GoogleAuthProvider());
  // }

  logout() {
    localStorage.removeItem('userToken'); 
    this.auth.signOut();
    this.router.navigate(['/login']); 
  }

}
function signOut(auth: AngularFireAuth) {
  throw new Error('Function not implemented.');
}

