import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyoffresPage } from './myoffres.page';

const routes: Routes = [
  {
    path: '',
    component: MyoffresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyoffresPageRoutingModule {}
