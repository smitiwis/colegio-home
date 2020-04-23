import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListComponent } from './cursos-list.component';

const routes: Routes = [{ path: '', component: CursosListComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosListRoutingModule { }
