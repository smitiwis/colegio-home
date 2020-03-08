import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeModule } from './views/home/home.module';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    HomeModule,
    LandingRoutingModule
  ],
  bootstrap: [LandingComponent],
  exports: [LandingComponent]
})
export class LandingModule { }
