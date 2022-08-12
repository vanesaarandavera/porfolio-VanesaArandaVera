import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HardYSoftSkiltComponent } from './hard-ysoft-skilt/hard-ysoft-skilt.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './proyectos/proyectos.component';

@NgModule({
  declarations: [
    ExperienciaLaboralComponent,
    EstudiosComponent,
    HardYSoftSkiltComponent,
    ProyectosComponent
  ],
  imports: [CommonModule,
    NgCircleProgressModule.forRoot({})
  ],
  exports: [ExperienciaLaboralComponent, EstudiosComponent, HardYSoftSkiltComponent, ProyectosComponent],
 })
export class ExperienciaModule { }
