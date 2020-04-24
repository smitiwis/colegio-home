import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodCreateComponent } from './period-create.component';

const routes: Routes = [{ path: '', component: PeriodCreateComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodCreateRoutingModule { }
