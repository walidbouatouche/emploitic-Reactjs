import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyheaderComponent } from './myheader/myheader.component'
import { IonicModule } from '@ionic/angular'
import { ListComponent } from './list/list.component'
import { ListbycatComponent } from './listbycat/listbycat.component'
import { OffredetailComponent } from './offredetail/offredetail.component'
import { ProfilfromComponent } from './profilfrom/profilfrom.component'
import { ModelComponent } from './model/model.component'
import { ExpOrdeploComponent } from './exp-ordeplo/exp-ordeplo.component'
import { ExpoOrdeploFormComponent } from './expo-ordeplo-form/expo-ordeplo-form.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MyheaderComponent,
    ListComponent,
    ListbycatComponent,
    OffredetailComponent,
    ProfilfromComponent ,
    ModelComponent,
    ExpoOrdeploFormComponent ,
    ExpOrdeploComponent 
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MyheaderComponent,
    ListComponent,
    ListbycatComponent,
    OffredetailComponent,
    ProfilfromComponent ,
    ModelComponent ,
    ExpoOrdeploFormComponent ,
    ExpOrdeploComponent ]
})
export class SharedModule { }
