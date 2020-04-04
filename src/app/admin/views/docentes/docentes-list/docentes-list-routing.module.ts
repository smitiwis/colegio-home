import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesListComponent } from './docentes-list.component';

const routes: Routes = [{ path: '', component: DocentesListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesListRoutingModule { }