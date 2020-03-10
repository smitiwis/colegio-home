import { NgModule } from '@angular/core';
import { ContactoRoutingModule } from './contacto-routing.module';
//componentes
import { ContactoComponent } from './contacto.component';
import { ContactenosComponent } from '../../components/contactenos/contactenos.component';
import { RedessocialesComponent } from '../../components/redessociales/redessociales.component';
import { FormularioyubicacionComponent } from '../../components/formularioyubicacion/formularioyubicacion.component'

@NgModule({
  declarations: [
    ContactoComponent,
    ContactenosComponent,
    RedessocialesComponent,
    FormularioyubicacionComponent
  ],
  imports: [
    ContactoRoutingModule
  ],
  providers: [],
  bootstrap: [ContactoComponent],
  exports: [ContactoComponent]
})
export class ContactoModule { }
