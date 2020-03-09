import { LogoutComponent } from './components/logout/logout.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    LogoutComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  bootstrap: [AdminComponent],
  exports: [AdminComponent]
})
export class AdminModule { }
