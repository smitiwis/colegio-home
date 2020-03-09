import { PeriodComponent } from './period.component';
import { PeriodRoutingModule } from './period-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PeriodComponent
  ],
  imports: [
    PeriodRoutingModule
  ],
  bootstrap: [PeriodComponent],
  exports: [PeriodComponent]
})
export class PeriodModule { }
