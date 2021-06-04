import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from './cliente/cliente/cliente.component';
import {FucionarioComponent} from './funcionario/fucionario/fucionario.component';
import {ModalidadeComponent} from './modalidade/modalidade/modalidade.component';

const appRouts: Routes = [
  { path: 'home', component: ClienteComponent },
  {path: 'funcionario', component: FucionarioComponent},
  {path: 'modalidade' , component: ModalidadeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
