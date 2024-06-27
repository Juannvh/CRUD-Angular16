import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../highlight.directive';

//Modulos



//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HighlightDirective
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule,
    MatGridListModule,
    HighlightDirective
    
  ]
})
export class SharedModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HighlightDirective } from '../../highlight.directive';

// //Angular Material
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatToolbarModule} from '@angular/material/toolbar'
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatIconModule} from '@angular/material/icon';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatListModule} from '@angular/material/list';
// import {MatCardModule} from '@angular/material/card';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatTableModule} from '@angular/material/table';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatGridListModule} from '@angular/material/grid-list';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';


// @NgModule({
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatInputModule,
//     MatButtonModule,
//     MatToolbarModule,
//     MatIconModule,
//     FormsModule
//   ],
//   declarations: [
//     HighlightDirective,
//     HeaderComponent,
//     FooterComponent
    
//   ],
//   exports: [
//     CommonModule,
//     ReactiveFormsModule,
//     MatInputModule,
//     MatButtonModule,
//     MatFormFieldModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatMenuModule,
//     MatListModule,
//     MatCardModule,
//     MatProgressSpinnerModule,
//     MatSlideToggleModule,
//     MatTableModule,
//     MatTooltipModule,
//     MatGridListModule,
//     HighlightDirective,
//     AngularFireAuthModule,
//     HeaderComponent,
//     FooterComponent,
//     FormsModule
//   ]
// })

// export class SharedModule { }
