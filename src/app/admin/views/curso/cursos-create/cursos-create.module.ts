import { NgModule } from '@angular/core';
import { CursosCreateComponent } from './cursos-create.component';
import { CursosCreateRoutingModule } from './cursos-create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      CursosCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CursosCreateRoutingModule,
  ],
  bootstrap: [ CursosCreateComponent ],
  exports: [ CursosCreateComponent ]
})
export class CursosCreateModule { }
