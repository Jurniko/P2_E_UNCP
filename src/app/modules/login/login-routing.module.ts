import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthDocenteGuard } from 'src/app/guards/auth-docente.guard';

import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[AuthDocenteGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
