import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesEditComponent } from './docentes-edit.component';

const routes: Routes = [{ path: '', component: DocentesEditComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesEditRoutingModule { }
