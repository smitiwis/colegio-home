import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PeriodListComponent } from './period-list.component';
import { NgModule } from '@angular/core';
import { PeriodListRoutingModule } from './period-list-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PeriodListComponent,
  ],
  imports: [
    PeriodListRoutingModule,
    CommonModule,
    NgxDatatableModule
  ],
  bootstrap: [PeriodListComponent],
  exports: [PeriodListComponent]
})
export class PeriodListModule { }
