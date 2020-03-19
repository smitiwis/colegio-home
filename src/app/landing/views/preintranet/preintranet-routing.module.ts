import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreintranetComponent } from './preintranet.component';


const routes: Routes = [{ path: '', component: PreintranetComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreintranetRoutingModule { }



