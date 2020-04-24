import { NgModule } from '@angular/core';
import { BimestreListComponent } from './bimestre-list.component';
import { BimestreListRoutingModule } from './bimestre-list-routing.module';

@NgModule({
  declarations: [
    BimestreListComponent,
  ],
  imports: [
    BimestreListRoutingModule
  ],
  bootstrap: [BimestreListComponent],
  exports: [BimestreListComponent]
})
export class BimestreListModule { }
