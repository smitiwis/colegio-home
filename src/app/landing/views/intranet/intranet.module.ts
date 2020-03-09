import { NgModule } from '@angular/core';
import { IntranetComponent } from './intranet.component';
import { IntranetRoutingModule } from './intranet-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IntranetComponent,
  ],
  imports: [
    IntranetRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [IntranetComponent],
  exports: [IntranetComponent]
})
export class IntranetModule { }
