import { NgModule } from '@angular/core';
import { PadresCreateComponent } from './padres-create.component';
import { PadresCreateRoutingModule } from './padres-create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      PadresCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PadresCreateRoutingModule,
  ],
  bootstrap: [ PadresCreateComponent ],
  exports: [ PadresCreateComponent ]
})
export class PadresCreateModule { }
