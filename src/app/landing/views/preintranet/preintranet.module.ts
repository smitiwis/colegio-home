import { NgModule } from '@angular/core';
import { PreintranetRoutingModule } from './preintranet-routing.module';
//componentes
import { PreintranetComponent } from './preintranet.component';
import { CardocenteComponent } from './cardocente/cardocente.component';
import { CaralumnoComponent } from './caralumno/caralumno.component';
import { CarpadreComponent } from './carpadre/carpadre.component';
import { CardloginComponent } from '../../components/cardlogin/cardlogin.component';



@NgModule({
  declarations: [
    PreintranetComponent,
    CardocenteComponent,
    CaralumnoComponent,
    CarpadreComponent,
    CardloginComponent
  ],
  imports: [
    PreintranetRoutingModule
  ],
  providers: [],
  bootstrap: [PreintranetComponent],
  exports: [PreintranetComponent]
})
export class PreintranetModule { }
