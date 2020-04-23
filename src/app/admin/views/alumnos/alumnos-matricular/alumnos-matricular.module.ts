import { NgModule } from '@angular/core';
import { AlumnosMatricularComponent } from './alumnos-matricular.component';
import { AlumnosMatricularRoutingModule } from './alumnos-matricular-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AlumnosMatricularComponent,
    ],
    imports: [
        AlumnosMatricularRoutingModule,
        ReactiveFormsModule,
        CommonModule

    ],
    bootstrap: [AlumnosMatricularComponent],
    exports: [AlumnosMatricularComponent]
})
export class AlumnosMatricularModule { }
