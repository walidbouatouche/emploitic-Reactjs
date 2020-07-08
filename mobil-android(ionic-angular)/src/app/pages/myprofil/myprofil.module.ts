import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyprofilPageRoutingModule } from './myprofil-routing.module';
import { SharedModule } from '../../shared/shared.module'
import { MyprofilPage } from './myprofil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MyprofilPageRoutingModule
  ],
  declarations: [MyprofilPage]
})
export class MyprofilPageModule {}
