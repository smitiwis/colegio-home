import { NgModule } from '@angular/core';
import { DocentesCreateModule } from './docentes-create/docentes-create.module'
import{ DocentesListModule } from './docentes-list/docentes-list.module'
import { DocentesEditModule } from './docentes-edit/docentes-edit.module';

@NgModule({
    imports: [
        DocentesCreateModule,
        DocentesListModule,
        DocentesEditModule
    ]
})
export class DocentesModule { }
