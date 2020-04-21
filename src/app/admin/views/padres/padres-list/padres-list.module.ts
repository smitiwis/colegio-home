import { NgModule } from '@angular/core';
import { PadresListRoutingModule } from './padres-list-routing.module';
import { PadresListComponent } from './padres-list.component';

@NgModule({
  declarations: [
    PadresListComponent
  ],
  imports: [
    PadresListRoutingModule
  ],
  bootstrap: [PadresListComponent],
  exports: [PadresListComponent]
})
export class PadresListModule { }
