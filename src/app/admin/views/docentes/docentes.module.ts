import { NgModule } from '@angular/core';
import { DocentesCreateModule } from './docentes-create/docentes-create.module'
import { DocentesListModule } from './docentes-list/docentes-list.module'
import { DocentesEditModule } from './docentes-edit/docentes-edit.module';
import { DocentesAsignarCursoModule } from './docentes-asignar-curso/docentes-asignar-curso.module';
import { NotasRegistrarModule } from './notas/notas-registrar/notas-registrar.module';

@NgModule({
    imports: [
        DocentesCreateModule,
        DocentesListModule,
        DocentesEditModule,
        DocentesAsignarCursoModule,
        NotasRegistrarModule
    ]
})
export class DocentesModule { }
