import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardPagesGuard } from './_gaurds/gaurdOthers/guard-pages.guard';
import { GuardGuard } from './_gaurds/gaurdLogin/guard.guard';

const routes: Routes = [
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
     , canActivate: [GuardGuard]
  },
  {
    path: 'offredetails',
    loadChildren: () => import('./pages/offredetails/offredetails.module').then( m => m.OffredetailsPageModule)
    , canActivate: [GuardPagesGuard]
 
  },
  {
    path: 'offresbycat',
    loadChildren: () => import('./pages/offresbycat/offresbycat.module').then( m => m.OffresbycatPageModule)
    , canActivate: [GuardPagesGuard]
  },
  {
    path: 'myoffres',
    loadChildren: () => import('./pages/myoffres/myoffres.module').then( m => m.MyoffresPageModule)
  ,canActivate: [GuardPagesGuard]},
  {
    path: 'myprofil',
    loadChildren: () => import('./pages/myprofil/myprofil.module').then( m => m.MyprofilPageModule)
    ,canActivate: [GuardPagesGuard]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
