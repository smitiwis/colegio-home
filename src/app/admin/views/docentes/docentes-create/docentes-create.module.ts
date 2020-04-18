import { NgModule } from '@angular/core';
import { DocentesCreateComponent } from './docentes-create.component';
import { DocentesCreateRoutingModule } from './docentes-create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      DocentesCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DocentesCreateRoutingModule,
  ],
  bootstrap: [ DocentesCreateComponent ],
  exports: [ DocentesCreateComponent ]
})
export class DocentesCreateModule { }
