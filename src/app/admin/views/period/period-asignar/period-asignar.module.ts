import { NgModule } from '@angular/core';
import { PeriodAsignarComponent } from './period-asignar.component';
import { PeriodAsignarRoutingModule } from './period-asignar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PeriodAsignarComponent,
  ],
  imports: [
    CommonModule,
    PeriodAsignarRoutingModule,
    ReactiveFormsModule,

  ],
  bootstrap: [PeriodAsignarComponent],
  exports: [PeriodAsignarComponent]
})
export class PeriodAsignarModule { }
