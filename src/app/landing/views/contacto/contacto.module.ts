import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';

@NgModule({
  declarations: [
    ContactoComponent,
  ],
  imports: [
    ContactoRoutingModule
  ],
  providers: [],
  bootstrap: [ContactoComponent],
  exports: [ContactoComponent]
})
export class ContactoModule { }
