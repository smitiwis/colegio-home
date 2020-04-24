import { NgModule } from '@angular/core';
import { NotasRegistrarComponent } from './notas-registrar.component';
import { NotasRegistrarRoutingModule } from './notas-registrar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      NotasRegistrarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotasRegistrarRoutingModule,
  ],
  bootstrap: [ NotasRegistrarComponent ],
  exports: [ NotasRegistrarComponent ]
})
export class NotasRegistrarModule { }
