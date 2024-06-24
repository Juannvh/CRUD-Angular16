import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Navigation, Router } from '@angular/router'


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  
})
export class UserFormComponent implements OnInit{
  userId!: string;
  users: User[] = [];
  userForm: FormGroup;
  user: User | undefined;

  constructor( private userService: UserService, private fb: FormBuilder,  private route: ActivatedRoute, private router: Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Método que se ejecuta al inicializar
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
        this.userId = id;
        this.userService.getUserById(id).subscribe(user => {
        this.userForm.patchValue(user);
      });
    }
  }

  // Método para navegar de regreso al listado de usuarios
  back(): void {
    this.router.navigate(['/users']);
  }

  // Método que maneja el envío del formulario
  onSubmit(): void {
    const user = this.userForm.value as User;
    if (this.userId) {
      this.userService.updateUser(this.userId, user);
      this.router.navigate(['/users']);
    } else {
      this.userService.addUser(user);
      this.router.navigate(['/users']);
    }
  }
}
