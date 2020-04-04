import { NgModule } from '@angular/core';
import { DocentesCreateComponent } from './docentes-create.component';
import { DocentesCreateRoutingModule } from './docentes-create-routing.module';

@NgModule({
  declarations: [
      DocentesCreateComponent
  ],
  imports: [
    DocentesCreateRoutingModule
  ],
  bootstrap: [ DocentesCreateComponent ],
  exports: [ DocentesCreateComponent ]
})
export class DocentesCreateModule { }
