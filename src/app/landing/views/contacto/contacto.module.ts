import { NgModule } from '@angular/core';
import { ContactoRoutingModule } from './contacto-routing.module';
//componentes
import { ContactoComponent } from './contacto.component';
import { ContactenosComponent } from '../../components/contactenos/contactenos.component';
import { RedessocialesComponent } from '../../components/redessociales/redessociales.component';
import { FormularioyubicacionComponent } from '../../components/formularioyubicacion/formularioyubicacion.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContactoComponent,
    ContactenosComponent,
    RedessocialesComponent,
    FormularioyubicacionComponent,
  ],
  imports: [
    ContactoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [ContactoComponent],
  exports: [ContactoComponent]
})
export class ContactoModule { }
