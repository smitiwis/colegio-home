import { NgModule } from '@angular/core';
import { PagoRegistrarComponent } from './pago-registrar.component';
import { PagoRegistrarRoutingModule } from './pago-registrar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      PagoRegistrarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagoRegistrarRoutingModule,
  ],
  bootstrap: [ PagoRegistrarComponent ],
  exports: [ PagoRegistrarComponent ]
})
export class PagoRegistrarModule { }
