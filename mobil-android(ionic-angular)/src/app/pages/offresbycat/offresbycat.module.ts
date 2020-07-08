import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffresbycatPageRoutingModule } from './offresbycat-routing.module';

import { OffresbycatPage } from './offresbycat.page';
import { SharedModule } from '../../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffresbycatPageRoutingModule,
    SharedModule
  ],
  declarations: [OffresbycatPage]
})
export class OffresbycatPageModule { }
