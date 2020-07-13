import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyoffresPageRoutingModule } from './myoffres-routing.module';

import { MyoffresPage } from './myoffres.page';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MyoffresPageRoutingModule
  ],
  declarations: [MyoffresPage]
})
export class MyoffresPageModule {}
