import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodAsignarComponent } from './period-asignar.component';

const routes: Routes = [{ path: '', component: PeriodAsignarComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodAsignarRoutingModule { }
