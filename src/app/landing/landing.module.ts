import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    // HttpClientModule,
    // RouterModule
    LandingRoutingModule
  ],
  
})
export class LandingModule { }
