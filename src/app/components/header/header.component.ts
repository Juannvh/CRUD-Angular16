

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],  
})

export class HeaderComponent {
    sidenav: any;

  constructor(private loginService: LoginService, private router: Router, private afAuth: AngularFireAuth) {}
  ngOnInit() : void {
      this.afAuth.currentUser.then(user => {
        if (!user) {
          this.router.navigate(['/login']);
        }
      })
  }
  logout() {
    this.loginService.logout();
  }  
}


