import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaModule } from './experiencia/experiencia.module';

import { InicialModule } from './inicial/inicial.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExperienciaModule,
    InicialModule,
    FooterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
