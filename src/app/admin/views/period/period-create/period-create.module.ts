import { NgModule } from '@angular/core';
import { PeriodCreateComponent } from './preiod-create.component';
import { PeriodCreateRoutingModule } from './period-create-routing.module';

@NgModule({
  declarations: [
    PeriodCreateComponent,
  ],
  imports: [
    PeriodCreateRoutingModule
  ],
  bootstrap: [PeriodCreateComponent],
  exports: [PeriodCreateComponent]
})
export class PeriodCreateModule { }
