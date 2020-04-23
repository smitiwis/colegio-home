import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesAsignarCursoComponent } from './docentes-asignar-curso.component';

const routes: Routes = [{ path: '', component: DocentesAsignarCursoComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocentesAsignarCursoRoutingModule { }