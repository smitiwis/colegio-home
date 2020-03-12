import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
//componentes
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { EstrellasComponent } from '../../components/estrellas/estrellas.component';
import { FormandoComponent } from '../../components/formando/formando.component';
import { ConocenosComponent } from '../../components/conocenos/conocenos.component';
import { InformacionacademicaComponent } from '../../components/informacionacademica/informacionacademica.component';
import { PorqueestudiarComponent } from '../../components/porqueestudiar/porqueestudiar.component';
import { TestimoniosComponent } from '../../components/testimonios/testimonios.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    EstrellasComponent,
    FormandoComponent,
    ConocenosComponent,
    InformacionacademicaComponent,
    PorqueestudiarComponent,
    TestimoniosComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
