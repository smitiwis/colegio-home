import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { IntranetComponent } from './components/intranet/intranet.component';
import { Error404Component } from './components/error404/error404.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseComponent } from './views/base/base.component';

@NgModule({
  declarations: [
    BaseComponent,
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    IntranetComponent,
    Error404Component,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
