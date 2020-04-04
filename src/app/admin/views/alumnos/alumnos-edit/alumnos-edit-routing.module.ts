import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosEditComponent } from './alumnos-edit.component';

const routes: Routes = [{ path: '', component: AlumnosEditComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosEditRoutingModule { }
