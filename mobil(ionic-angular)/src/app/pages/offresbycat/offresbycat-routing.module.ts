import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffresbycatPage } from './offresbycat.page';

const routes: Routes = [
  {
    path: '',
    component: OffresbycatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffresbycatPageRoutingModule {}
