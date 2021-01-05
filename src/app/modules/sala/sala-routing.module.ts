import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloqueComponent } from './components/bloque-text/bloque.component';
import { BloqueVidComponent } from './components/bloque-vid/bloque-vid.component';
import { LevelsComponent } from './components/levels/levels.component';
import { RegisterComponent } from './components/register/register.component';

import { SalaComponent } from './sala.component';

const routes: Routes = [
  { path: '', component: SalaComponent },
  { path: ':codigo', component: BloqueComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaRoutingModule { }
