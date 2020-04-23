import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosCreateComponent } from './cursos-create.component';

const routes: Routes = [{ path: '', component: CursosCreateComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosCreateRoutingModule { }
