import { NgModule } from '@angular/core';
import { NosotrosRoutingModule } from './nosotros-routing.module';
//componentes
import { NosotrosComponent } from './nosotros.component';
import { SomosComponent } from '../../components/somos/somos.component';
import { NuestravmComponent } from '../../components/nuestravm/nuestravm.component';
import { PilaresComponent } from '../../components/pilares/pilares.component';
import { PlanadocentComponent } from '../../components/planadocent/planadocent.component';
import { NuestroslogrosComponent } from '../../components/nuestroslogros/nuestroslogros.component'

@NgModule({
  declarations: [
    NosotrosComponent,
    SomosComponent,
    NuestravmComponent,
    PilaresComponent,
    PlanadocentComponent,
    NuestroslogrosComponent
  ],
  imports: [
    NosotrosRoutingModule
  ],
  providers: [],
  bootstrap: [NosotrosComponent],
  exports: [NosotrosComponent]
})
export class NosotrosModule { }
