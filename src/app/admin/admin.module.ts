import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    LogoutComponent,
    MenuComponent
  ],
  imports: [
    AdminRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  bootstrap: [AdminComponent],
  exports: [AdminComponent]
})
export class AdminModule { }
