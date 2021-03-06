import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntranetComponent } from './intranet.component';


const routes: Routes = [{ path: '', component: IntranetComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
