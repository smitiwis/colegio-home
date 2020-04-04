import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesCreateComponent } from './docentes-create.component';

const routes: Routes = [{ path: '', component: DocentesCreateComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesCreateRoutingModule { }
