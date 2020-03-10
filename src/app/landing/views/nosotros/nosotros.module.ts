import { NgModule } from '@angular/core';
import { NosotrosComponent } from './nosotros.component';
import { NosotrosRoutingModule } from './nosotros-routing.module';

@NgModule({
  declarations: [
    NosotrosComponent,
  ],
  imports: [
    NosotrosRoutingModule
  ],
  providers: [],
  bootstrap: [NosotrosComponent],
  exports: [NosotrosComponent]
})
export class NosotrosModule { }
