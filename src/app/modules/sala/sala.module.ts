import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaRoutingModule } from './sala-routing.module';
import { SalaComponent } from './sala.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { LevelsComponent } from './components/levels/levels.component';
import { BloqueTextComponent } from './components/bloque-text/bloque-text.component';
import { BloqueVidComponent } from './components/bloque-vid/bloque-vid.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ResultadoComponent } from './components/bloque-text/resultado/resultado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './components/bloque-text/text/text.component';
import { VidComponent } from './components/bloque-vid/vid/vid.component';
import { BloqueIndexComponent } from './components/bloque-index/bloque-index.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SalaService } from './services/sala.service';
import { FinalScoreComponent } from './components/bloque-index/final-score/final-score.component';
import { TokenInterceptor } from 'src/app/core/TokenInterceptor.interceptor';

@NgModule({
  declarations: [SalaComponent, RegisterComponent, LevelsComponent, BloqueTextComponent, BloqueVidComponent, ResultadoComponent, TextComponent, VidComponent, BloqueIndexComponent, FinalScoreComponent],
  imports: [
    CommonModule,
    SalaRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    SharedModule,
    YouTubePlayerModule,
    HttpClientModule,

  ],
  providers:[SalaService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }]
})
export class SalaModule { }
