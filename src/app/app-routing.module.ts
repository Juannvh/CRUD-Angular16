import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [ 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
    { path: 'users', component: UserListComponent },
    { path: 'new', component: UserFormComponent },
    { path: 'edit/:id', component: UserFormComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  // { path: 'users', component: UserListComponent },
  // { path: 'new', component: UserFormComponent },
  // { path: 'edit/:id', component: UserFormComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
