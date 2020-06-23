import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffredetailsPage } from './offredetails.page';

const routes: Routes = [
  {
    path: '',
    component: OffredetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffredetailsPageRoutingModule {}
