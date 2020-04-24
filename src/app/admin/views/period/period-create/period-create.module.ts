import { NgModule } from '@angular/core';
import { PeriodCreateComponent } from './period-create.component';
import { PeriodCreateRoutingModule } from './period-create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PeriodCreateComponent,
  ],
  imports: [
    CommonModule,
    PeriodCreateRoutingModule,
    ReactiveFormsModule,

  ],
  bootstrap: [PeriodCreateComponent],
  exports: [PeriodCreateComponent]
})
export class PeriodCreateModule { }
