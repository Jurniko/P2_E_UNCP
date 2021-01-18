import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { EstudiantesTestComponent } from './components/estudiantes-test/estudiantes-test.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultadoLevelComponent } from './components/estudiantes-test/resultado-level/resultado-level.component';
import { SalasComponent } from './components/salas/salas.component';
import { ModalComponent } from './components/salas/modal/modal.component';
import { AddComponent } from './components/salas/add/add.component';
import { CardComponent } from './components/estudiantes-test/card/card.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe'
import {  NgxPaginationModule} from 'ngx-pagination';
import { EditComponent } from './components/salas/edit/edit.component';
import { TokenInterceptor } from 'src/app/core/TokenInterceptor.interceptor';

@NgModule({
  declarations: [DocenteComponent, EstudiantesTestComponent, ResultadoLevelComponent, SalasComponent, ModalComponent, AddComponent,CardComponent, EditComponent],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    SharedModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule
  ],
})
export class DocenteModule { }
