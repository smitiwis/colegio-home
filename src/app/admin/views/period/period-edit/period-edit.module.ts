import { NgModule } from '@angular/core';
import { PeriodEditComponent } from './period-edit.component';
import { PeriodEditRoutingModule } from './period-edit-routing.module';

@NgModule({
  declarations: [
    PeriodEditComponent,
  ],
  imports: [
    PeriodEditRoutingModule
  ],
  bootstrap: [PeriodEditComponent],
  exports: [PeriodEditComponent]
})
export class PeriodEditModule { }