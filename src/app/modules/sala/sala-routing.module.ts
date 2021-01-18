import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BloqueIndexComponent } from './components/bloque-index/bloque-index.component';
import { LevelsComponent } from './components/levels/levels.component';
import { RegisterComponent } from './components/register/register.component';
import { ExistCodeRoomGuard } from './guards/exist-code-room.guard';
import { LimitLevelGuard } from './guards/limit-level.guard';

import { SalaComponent } from './sala.component';

const routes: Routes = [
  { path: '', component: SalaComponent ,canActivate:[AuthGuard]},
  
  { path: ':codigo', canActivate:[ExistCodeRoomGuard,AuthGuard],children:[
    { path: '',component:RegisterComponent},
    { path: 'lvl',children:[
      { path:'',component:LevelsComponent},
      { path: ':lvl', canActivate:[LimitLevelGuard] ,component:BloqueIndexComponent }
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaRoutingModule { }
