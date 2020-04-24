import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BimestreCreateComponent } from './bimestre-create.component';

const routes: Routes = [{ path: '', component: BimestreCreateComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BimestreCreateRoutingModule { }
