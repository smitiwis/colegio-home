import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'inicio', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'intranet', loadChildren: () => import('./views/intranet/intranet.module').then(m => m.IntranetModule) },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
