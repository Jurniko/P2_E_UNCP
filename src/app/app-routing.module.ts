import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NotFoundErrorComponent } from './shared/not-found-error/not-found-error.component';

const routes: Routes = [
  {path:'', component:IndexComponent , pathMatch:"full"},
  { path: 'sala', loadChildren: () => import('./modules/sala/sala.module').then(m => m.SalaModule) },
  { path: 'docente', loadChildren: () => import('./modules/docente/docente.module').then(m => m.DocenteModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: '**', component:NotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing : true,
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
