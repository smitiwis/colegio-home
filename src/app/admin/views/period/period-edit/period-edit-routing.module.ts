import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodEditComponent } from './period-edit.component';

const routes: Routes = [{ path: '', component: PeriodEditComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodEditRoutingModule { }
