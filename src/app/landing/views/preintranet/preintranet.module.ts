import { NgModule } from '@angular/core';
import { PreintranetRoutingModule } from './preintranet-routing.module';
//componentes
import { PreintranetComponent } from './preintranet.component';
import { CardloginModule } from '../../components/cardlogin/cardlogin.module';


@NgModule({
  declarations: [
    PreintranetComponent
  ],
  imports: [
    CardloginModule,
    PreintranetRoutingModule
  ],
  providers: [],
  bootstrap: [PreintranetComponent],
  exports: [PreintranetComponent]
})
export class PreintranetModule { }
