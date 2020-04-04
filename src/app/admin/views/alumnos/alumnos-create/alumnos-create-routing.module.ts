import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosCreateComponent } from './alumnos-create.component';

const routes: Routes = [{ path: '', component: AlumnosCreateComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosCreateRoutingModule { }