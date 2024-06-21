import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserListComponent } from '../user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'UserList', component: UserListComponent },
  { path: 'Home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
 