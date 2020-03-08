import { NgModule } from '@angular/core';
import { IntranetComponent } from './intranet.component';
import { IntranetRoutingModule } from './intranet-routing.module';

@NgModule({
  declarations: [
    IntranetComponent,
  ],
  imports: [
    IntranetRoutingModule
  ],
  providers: [],
  bootstrap: [IntranetComponent],
  exports: [IntranetComponent]
})
export class IntranetModule { }
