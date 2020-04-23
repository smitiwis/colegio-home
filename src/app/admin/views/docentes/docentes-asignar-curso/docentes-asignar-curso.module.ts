import { NgModule } from '@angular/core';
import { DocentesAsignarCursoRoutingModule } from './docentes-asignar-curso-routing.module';
import { DocentesAsignarCursoComponent } from './docentes-asignar-curso.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocentesAsignarCursoComponent
  ],
  imports: [
    DocentesAsignarCursoRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [DocentesAsignarCursoComponent],
  exports: [DocentesAsignarCursoComponent]
})
export class DocentesAsignarCursoModule { }
