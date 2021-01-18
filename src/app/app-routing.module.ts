import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  { path: 'sala', loadChildren: () => import('./modules/sala/sala.module').then(m => m.SalaModule) },
  { path: 'docente', loadChildren: () => import('./modules/docente/docente.module').then(m => m.DocenteModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
