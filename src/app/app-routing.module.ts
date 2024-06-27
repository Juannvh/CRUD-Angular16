import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'users', component: UserListComponent },
  { path: 'new', component: UserFormComponent },
  { path: 'edit/:id', component: UserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { UserListComponent } from './components/user-list/user-list.component'; // Asegúrate de que la ruta es correcta
// import { UserFormComponent } from './components/user-form/user-form.component';
// import  { LoginComponent } from './components/login/login.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
//   { path: 'users', component: UserListComponent },
//   { path: 'new', component: UserFormComponent },
//   { path: 'edit/:id', component: UserFormComponent },
  
// ];

// @NgModule({
//   declarations: [
//     LoginComponent
//   ],
//   imports: [
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // import { UserListComponent } from './components/user-list/user-list.component';
// // import { UserFormComponent } from './components/user-form/user-form.component';
// // import { LoginComponent } from './components/login/login.component';
// // import { RegisterComponent } from './components/register/register.component';
// // import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// // //Pendiente
// // import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // import { SharedModule } from './components/shared/shared.module';
// // import { AppComponent } from './app.component';


// // const routes: Routes = [
// //   { path: 'login', component: LoginComponent },
// //   { path: 'register', component: RegisterComponent },
// //   {
// //     path: '', 
// //     component: MainLayoutComponent,
// //     children: [
// //       { path: '', redirectTo: 'home', pathMatch: 'full' },
// //       { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
// //         // ...canActivate(() => redirectUnauthorizedTo(['users']) )
// //       },
// //       { path: 'users', component: UserListComponent},
// //       { path: 'new', component: UserFormComponent },
// //       { path: 'edit/:id', component: UserFormComponent }
// //     ]
// //   }
// // ];

// // @NgModule({
// //   imports: [
// //     RouterModule.forRoot(routes)
// //   ],
// //   exports: [RouterModule]
// // })

// // export class AppRoutingModule { }
