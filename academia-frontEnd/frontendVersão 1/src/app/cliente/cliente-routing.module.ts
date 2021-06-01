import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from './cliente/cliente.component';
import {ClienteDeltalheComponent} from './cliente-deltalhe/cliente-deltalhe.component';
import {TurmaComponent} from '../turma/turma/turma.component';

const clienteRoutes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente-detalhe', component: ClienteDeltalheComponent},
  {path: 'cliente-detalhe/:id', component: ClienteDeltalheComponent},
  {path: 'turma', component: TurmaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
