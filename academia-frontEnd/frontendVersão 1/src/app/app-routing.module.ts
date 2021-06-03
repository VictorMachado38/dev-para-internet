import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from './cliente/cliente/cliente.component';
import {FucionarioComponent} from './funcionario/fucionario/fucionario.component';

const appRouts: Routes = [
  { path: 'home', component: ClienteComponent },
  {path: 'funcionario', component: FucionarioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
