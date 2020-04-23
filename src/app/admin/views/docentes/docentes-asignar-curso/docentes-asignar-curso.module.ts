import { NgModule } from '@angular/core';
import { DocentesAsignarCursoRoutingModule } from './docentes-asignar-curso-routing.module';
import { DocentesAsignarCursoComponent } from './docentes-asignar-curso.component';

@NgModule({
  declarations: [
    DocentesAsignarCursoComponent
  ],
  imports: [
    DocentesAsignarCursoRoutingModule
  ],
  bootstrap: [DocentesAsignarCursoComponent],
  exports: [DocentesAsignarCursoComponent]
})
export class DocentesAsignarCursoModule { }
