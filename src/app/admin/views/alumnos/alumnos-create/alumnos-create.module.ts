import { NgModule } from '@angular/core';
import { AlumnosCreateComponent } from './alumnos-create.component';
import { AlumnosCreateRoutingModule } from './alumnos-create-routing.module';

@NgModule({
  declarations: [
    AlumnosCreateComponent,
  ],
  imports: [
    AlumnosCreateRoutingModule,
    
  ],
  bootstrap: [AlumnosCreateComponent],
  exports: [AlumnosCreateComponent]
})
export class AlumnosCreateModule { }
