import { PeriodCreateModule } from './period-create/period-create.module';
import { NgModule } from '@angular/core';
import { PeriodListModule } from './period-list/period-list.module';

@NgModule({
  imports: [
    PeriodCreateModule,
    PeriodListModule,
  ]
})
export class PeriodModule { }
