import { NgModule } from '@angular/core';
import { DocentesListRoutingModule } from './docentes-list-routing.module';
import { DocentesListComponent } from './docentes-list.component';

@NgModule({
  declarations: [
    DocentesListComponent
  ],
  imports: [
    DocentesListRoutingModule
  ],
  bootstrap: [DocentesListComponent],
  exports: [DocentesListComponent]
})
export class DocentesListModule { }
