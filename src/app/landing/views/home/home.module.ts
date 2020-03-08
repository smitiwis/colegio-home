import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
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
