import { NgModule } from '@angular/core';
import { PreintranetRoutingModule } from './preintranet-routing.module';
//componentes
import { PreintranetComponent } from './preintranet.component';

@NgModule({
  declarations: [
    PreintranetComponent
  ],
  imports: [
    PreintranetRoutingModule
  ],
  providers: [],
  bootstrap: [PreintranetComponent],
  exports: [PreintranetComponent]
})
export class PreintranetModule { }
