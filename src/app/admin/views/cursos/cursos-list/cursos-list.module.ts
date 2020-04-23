import { NgModule } from '@angular/core';
import { CursosListComponent } from './cursos-list.component';
import { CursosListRoutingModule } from './cursos-list-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      CursosListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CursosListRoutingModule,
  ],
  bootstrap: [ CursosListComponent ],
  exports: [ CursosListComponent ]
})
export class CursosListModule { }
