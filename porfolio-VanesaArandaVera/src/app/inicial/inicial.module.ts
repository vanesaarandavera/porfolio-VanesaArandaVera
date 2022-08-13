import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoApComponent } from './logo-ap/logo-ap.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';




@NgModule({
  declarations: [
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
  HeaderComponent, LogoApComponent, BannerComponent, AcercaDeComponent, 
  ]
})
export class InicialModule { }
