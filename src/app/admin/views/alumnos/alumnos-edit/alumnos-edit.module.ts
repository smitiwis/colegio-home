import { NgModule } from '@angular/core';
import { AlumnosEditComponent } from './alumnos-edit.component';
import { AlumnosEditRoutingModule } from './alumnos-edit-routing.module';

@NgModule({
  declarations: [
    AlumnosEditComponent,
  ],
  imports: [
    AlumnosEditRoutingModule
  ],
  bootstrap: [AlumnosEditComponent],
  exports: [AlumnosEditComponent]
})
export class AlumnosEditModule { }