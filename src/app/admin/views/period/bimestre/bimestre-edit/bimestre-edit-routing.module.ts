import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BimestreEditComponent } from './bimestre-edit.component';

const routes: Routes = [{ path: '', component: BimestreEditComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BimestreEditRoutingModule { }
