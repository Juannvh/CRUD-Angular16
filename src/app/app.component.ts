import { Component, inject} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated: boolean = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(this.isAuthenticated);
      console.log("13");
    })
    
  }

  title = 'crudAngular16';
}
