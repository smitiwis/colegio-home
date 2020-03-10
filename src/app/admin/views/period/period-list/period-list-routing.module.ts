import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodListComponent } from './period-list.component';

const routes: Routes = [{ path: '', component: PeriodListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodListRoutingModule { }
