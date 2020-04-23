import { NgModule } from '@angular/core';
import { CursosCreateModule } from './cursos-create/cursos-create.module'
import { CursosListModule } from './cursos-list/cursos-list.module';

@NgModule({
    imports: [
        CursosCreateModule,
        CursosListModule,
        
    ]
})
export class CursosModule { }
