import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteComponent} from './cliente/cliente.component';
import {ClienteDeltalheComponent} from './cliente-deltalhe/cliente-deltalhe.component';
import {TurmaComponent} from '../turma/turma/turma.component';
import {FucionarioComponent} from '../funcionario/fucionario/fucionario.component';
import {AlunoComponent} from '../aluno/aluno/aluno.component';
import {ProfessorComponent} from '../professor/professor/professor.component';
import {ModalidadeComponent} from '../modalidade/modalidade/modalidade.component';
import {PlanoComponent} from '../plano/plano/plano.component';
import {SalaDeAulaComponent} from '../salaDeAula/sala-de-aula/sala-de-aula.component';

const clienteRoutes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente-detalhe', component: ClienteDeltalheComponent},
  {path: 'cliente-detalhe/:id', component: ClienteDeltalheComponent},
  {path: 'turma', component: TurmaComponent},
  {path: 'funcionario', component: FucionarioComponent},
  {path: 'aluno', component: AlunoComponent},
  {path: 'professor', component: ProfessorComponent},
  {path: 'modalidade', component: ModalidadeComponent},
  {path: 'plano' , component: PlanoComponent},
  {path: 'salaDeAula', component: SalaDeAulaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
