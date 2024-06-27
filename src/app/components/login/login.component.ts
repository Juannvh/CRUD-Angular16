import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  
   
  errorMessage: string = '';

  constructor( private loginService: LoginService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router){
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.formLogin.value)
    .then(response => {
      this.router.navigate(['/home']);
    })
    .catch(error => {
      this.errorMessage = error.message || 'Ocurrió un error al registrarse.';
    });
  }

  onClick() {
    console.log("click")
    this.router.navigate(['/login']);
  }  
}
