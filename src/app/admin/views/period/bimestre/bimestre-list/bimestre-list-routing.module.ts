import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BimestreListComponent } from './bimestre-list.component';

const routes: Routes = [{ path: '', component: BimestreListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BimestreListRoutingModule { }
