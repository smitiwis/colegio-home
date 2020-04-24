import { NgModule } from '@angular/core';
import { PeriodCreateModule } from './period-create/period-create.module';
import { PeriodListModule }   from './period-list/period-list.module';
import { PeriodEditModule }   from './period-edit/period-edit.module';
import { BimestreModule } from './bimestre/bimestre.module';
import { PeriodAsignarModule } from './period-asignar/period-asignar.module';

@NgModule({
  imports: [
    PeriodCreateModule,
    PeriodListModule,
    PeriodEditModule,
    PeriodAsignarModule,
    BimestreModule,
  ]
})
export class PeriodModule { }
