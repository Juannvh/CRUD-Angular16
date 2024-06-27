import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  formReg: FormGroup;
 
  errorMessage: string = '';

  constructor(private loginService: LoginService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.formReg = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.register(this.formReg.value)
    .then(response => {
      this.router.navigate(['/login']);
    })
    .catch(error => {
      this.errorMessage = error.message || 'Ocurrió un error al registrarse.';
    });
  }
}
