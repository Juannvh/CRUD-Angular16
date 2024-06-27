import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserListComponent } from './components/user-list/user-list.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    FilterPipe,
    UserFormComponent,
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// // import { HeaderComponent } from './components/header/header.component';
// // import { FooterComponent } from './components/footer/footer.component';

// import { UserListComponent } from './components/user-list/user-list.component';
// import { FilterPipe } from './filter.pipe';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UserFormComponent } from './components/user-form/user-form.component';

// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SharedModule } from './components/shared/shared.module';

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { environment } from '../environments/environment';




// @NgModule({
//   declarations: [
//     AppComponent,
//     // HeaderComponent,
//     // FooterComponent,
//     UserListComponent,
//     FilterPipe,
//     UserFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     NoopAnimationsModule,
//     ReactiveFormsModule,
//     BrowserAnimationsModule,
//     SharedModule,
//     BrowserModule,
//     AngularFireModule.initializeApp(environment.firebase),
//     AngularFirestoreModule,
//     SharedModule,
    
    
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// // import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// // import { UserListComponent } from './components/user-list/user-list.component';
// // import { FilterPipe } from './filter.pipe';
// // // import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // import { UserFormComponent } from './components/user-form/user-form.component';
// // import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// // import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // import { AngularFireModule } from '@angular/fire/compat';
// // import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// // import { environment } from '../environments/environment';
// // import { RegisterComponent } from './components/register/register.component';
// // import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
// // import { SharedModule } from './components/shared/shared.module';


// // @NgModule({
// //   declarations: [
// //     AppComponent,
// //     RegisterComponent,
// //     UserListComponent,
// //     UserFormComponent,
// //     FilterPipe,
// //     MainLayoutComponent

// //   ],
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule,
// //     NoopAnimationsModule,
// //     BrowserAnimationsModule,
// //     AngularFireModule.initializeApp(environment.firebase),
// //     AngularFirestoreModule,
// //     SharedModule,
    
    
// //   ],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// // export class AppModule { }


