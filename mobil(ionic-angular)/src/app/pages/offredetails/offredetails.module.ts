import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffredetailsPageRoutingModule } from './offredetails-routing.module';

import { OffredetailsPage } from './offredetails.page';
import { SharedModule } from '../../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffredetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [OffredetailsPage]
})
export class OffredetailsPageModule { }
