import { NgModule } from '@angular/core';
import { PadresEditComponent } from './padres-edit.component';
import { PadresEditRoutingModule } from './padres-edit-routing.module';

@NgModule({
  declarations: [
    PadresEditComponent,
  ],
  imports: [
    PadresEditRoutingModule
  ],
  bootstrap: [PadresEditComponent],
  exports: [PadresEditComponent]
})
export class PadresEditModule  { }