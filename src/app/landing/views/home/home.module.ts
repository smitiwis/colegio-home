import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
//componentes
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
