import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthDocenteGuard } from 'src/app/guards/auth-docente.guard';
import { EstudiantesTestComponent } from './components/estudiantes-test/estudiantes-test.component';
import { ResultadoLevelComponent } from './components/estudiantes-test/resultado-level/resultado-level.component';
import { AddComponent } from './components/salas/add/add.component';
import { EditComponent } from './components/salas/edit/edit.component';
import { SalasComponent } from './components/salas/salas.component';

import { DocenteComponent } from './docente.component';

const routes: Routes = [
  {
    path: '',
    component: DocenteComponent,
    canActivate:[AuthDocenteGuard],
    children: [
      {
        path: 'estudiantes',
        children: [
          { path: '', component: EstudiantesTestComponent },
          { path: ':id', component: ResultadoLevelComponent },
        ],
      },
      {
        path: 'salas',
        children: [
          { path: '', component: SalasComponent },
          { path: ':id', component: EditComponent},
        ],
      },

      { path: 'nueva-sala', component: AddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteRoutingModule {}
