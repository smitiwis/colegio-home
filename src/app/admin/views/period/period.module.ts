import { NgModule } from '@angular/core';
import { PeriodCreateModule } from './period-create/period-create.module';
import { PeriodListModule }   from './period-list/period-list.module';
import { PeriodEditModule }   from './period-edit/period-edit.module';
import { BimestreModule } from './bimestre/bimestre.module';

@NgModule({
  imports: [
    PeriodCreateModule,
    PeriodListModule,
    PeriodEditModule,
    BimestreModule
  ]
})
export class PeriodModule { }
