import { NgModule } from '@angular/core';
import { BimestreCreateComponent } from './bimestre-create.component';
import { BimestreCreateRoutingModule } from './bimestre-create-routing.module';

@NgModule({
  declarations: [
    BimestreCreateComponent,
  ],
  imports: [
    BimestreCreateRoutingModule
  ],
  bootstrap: [BimestreCreateComponent],
  exports: [BimestreCreateComponent]
})
export class BimestreCreateModule { }
