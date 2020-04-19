import { NgModule } from '@angular/core';
import { AlumnosCreateComponent } from './alumnos-create.component';
import { AlumnosCreateRoutingModule } from './alumnos-create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AlumnosCreateComponent,
  ],
  imports: [
    AlumnosCreateRoutingModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  bootstrap: [AlumnosCreateComponent],
  exports: [AlumnosCreateComponent]
})
export class AlumnosCreateModule { }
