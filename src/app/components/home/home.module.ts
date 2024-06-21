import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ModuloCompartido } from '../../shared/compartido.module';

import {MatCardModule} from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModuloCompartido,
    MatCardModule,
    SharedModule

  ]
})
export class HomeModule { }
