import { NgModule } from '@angular/core';
import { PadresRelacionarRoutingModule } from './padres-relacionar-routing.module';
import { PadresRelacionarComponent } from './padres-relacionar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PadresRelacionarComponent
  ],
  imports: [
    PadresRelacionarRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [PadresRelacionarComponent],
  exports: [PadresRelacionarComponent]
})
export class PadresRelacionarModule { }
