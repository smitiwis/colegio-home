import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PadresListComponent } from './padres-list.component';

const routes: Routes = [{ path: '', component: PadresListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PadresListRoutingModule { }