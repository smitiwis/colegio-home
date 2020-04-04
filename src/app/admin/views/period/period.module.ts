import { NgModule } from '@angular/core';
import { PeriodCreateModule } from './period-create/period-create.module';
import { PeriodListModule }   from './period-list/period-list.module';
import { PeriodEditModule }   from './period-edit/period-edit.module';

@NgModule({
  imports: [
    PeriodCreateModule,
    PeriodListModule,
    PeriodEditModule
  ]
})
export class PeriodModule { }
