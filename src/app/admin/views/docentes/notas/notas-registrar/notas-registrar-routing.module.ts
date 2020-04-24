import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasRegistrarComponent } from './notas-registrar.component';

const routes: Routes = [{ path: '', component: NotasRegistrarComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRegistrarRoutingModule { }
