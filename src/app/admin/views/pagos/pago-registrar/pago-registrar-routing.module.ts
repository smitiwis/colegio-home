import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagoRegistrarComponent } from './pago-registrar.component';

const routes: Routes = [{ path: '', component: PagoRegistrarComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRegistrarRoutingModule { }
