import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadresEditComponent } from './padres-edit.component';

const routes: Routes = [{ path: '', component: PadresEditComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PadresEditRoutingModule { }
