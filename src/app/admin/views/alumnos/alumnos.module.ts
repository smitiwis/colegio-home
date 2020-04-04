import { NgModule } from '@angular/core';
import { AlumnosCreateModule } from './alumnos-create/alumnos-create.module';
import { AlumnosListModule } from './alumnos-list/alumnos-list.module';
import { AlumnosEditModule } from './alumnos-edit/alumnos-edit.module';

@NgModule({
  imports: [
    AlumnosCreateModule,
    AlumnosListModule,
    AlumnosEditModule
  ]
})
export class AlumnosModule { }
