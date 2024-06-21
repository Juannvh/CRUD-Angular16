import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Navigation, Router } from '@angular/router'
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  
})
  export class UserFormComponent implements OnInit{

    users: User[] = [];
    userForm: FormGroup;
    user: User | undefined;

    constructor( private userService: UserService, private fb: FormBuilder,  private route: ActivatedRoute, private router: Router) {
      this.userForm = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const idUser = parseInt(id);
        this.userService.getUserById(idUser).subscribe(user => {
          if (user) {
            this.user = user;
            this.userForm.patchValue(user);
          }
        });
      }
    }

  back(): void {
    this.router.navigate(['/users']);
  }

  onSubmit(): void {
    const user = this.userForm.value as User;
    
    if (this.user) {
      console.log(user);
      this.userService.updateUser(user).subscribe(success => {
        const formValues = this.userForm.value;
      });    
      this.router.navigate(['/users']);
    } else {
      this.userService.addUser(user);
      this.router.navigate(['/users']);
    }
  }
  
  addUser() {
    console.log(this.userForm);
    const user: User = {
      id: 1,
      username: this.userForm.value.username,
      name: this.userForm.value.name,
      email: this.userForm.value.email,

    }
    console.log(user);
  
  }

  updateUser(user: User): void {
    // this.userService.updateUser(user).subscribe(success => {
    //   const formValues = this.userForm.value;
    // })    
  }

  

}
