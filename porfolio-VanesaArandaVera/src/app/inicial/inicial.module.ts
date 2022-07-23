import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoApComponent } from './logo-ap/logo-ap.component';
import { SocialComponent } from './social/social.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoApComponent,
    SocialComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  HeaderComponent, LogoApComponent, SocialComponent, BannerComponent
  ]
})
export class InicialModule { }
