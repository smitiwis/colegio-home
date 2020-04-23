import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosMatricularComponent } from './alumnos-matricular.component';

const routes: Routes = [{ path: '', component: AlumnosMatricularComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosMatricularRoutingModule { }