import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofilPage } from './myprofil.page';

const routes: Routes = [
  {
    path: '',
    component: MyprofilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyprofilPageRoutingModule {}
