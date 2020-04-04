import { NgModule } from '@angular/core';
import { DocentesEditComponent } from './docentes-edit.component';
import { DocentesEditRoutingModule } from './docentes-edit-routing.module';

@NgModule({
  declarations: [
    DocentesEditComponent,
  ],
  imports: [
    DocentesEditRoutingModule
  ],
  bootstrap: [DocentesEditComponent],
  exports: [DocentesEditComponent]
})
export class DocentesEditModule  { }