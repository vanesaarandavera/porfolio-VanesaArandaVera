import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaModule } from './experiencia/experiencia.module';
import { ProyectosComponent } from './experiencia/proyectos/proyectos.component';
import { InicialModule } from './inicial/inicial.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExperienciaModule,
    InicialModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
