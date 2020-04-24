import { NgModule } from '@angular/core';
import { BimestreEditComponent } from './bimestre-edit.component';
import { BimestreEditRoutingModule } from './bimestre-edit-routing.module';

@NgModule({
  declarations: [
    BimestreEditComponent,
  ],
  imports: [
    BimestreEditRoutingModule
  ],
  bootstrap: [BimestreEditComponent],
  exports: [BimestreEditComponent]
})
export class BimestreEditModule { }
