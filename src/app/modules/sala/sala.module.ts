import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaRoutingModule } from './sala-routing.module';
import { SalaComponent } from './sala.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { LevelsComponent } from './components/levels/levels.component';
import { BloqueComponent } from './components/bloque-text/bloque.component';
import { BloqueVidComponent } from './components/bloque-vid/bloque-vid.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ResultadoComponent } from './components/bloque-text/resultado/resultado.component';


@NgModule({
  declarations: [SalaComponent, RegisterComponent, LevelsComponent, BloqueComponent, BloqueVidComponent, ResultadoComponent],
  imports: [
    CommonModule,
    SalaRoutingModule,
    SharedModule,
    YouTubePlayerModule
  ]
})
export class SalaModule { }
