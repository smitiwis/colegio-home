import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadresRelacionarComponent } from './padres-relacionar.component';

const routes: Routes = [{ path: '', component: PadresRelacionarComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PadresRelacionarRoutingModule { }