import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RecursoComponent } from './components/recurso/punto/recurso.component';
import { DesgloseComponent } from './components/recurso/desglose/desglose.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AdminComponent,
    LogoutComponent,
    MenuComponent,
    RecursoComponent,
    DesgloseComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  bootstrap: [AdminComponent],
  exports: [AdminComponent]
})
export class AdminModule { }
