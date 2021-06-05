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
import {ProfessorDetalheComponent} from '../professor/professor-detalhe/professor-detalhe.component';
import {AunoDetalheComponent} from '../aluno/auno-detalhe/auno-detalhe.component';
import {FuncionarioDetalheComponent} from '../funcionario/funcionario-detalhe/funcionario-detalhe.component';
import {TurmaDetalheComponent} from '../turma/turma-detalhe/turma-detalhe.component';
import {ModalidadeDetalheComponent} from '../modalidade/modalidade-detalhe/modalidade-detalhe.component';
import {SalaDeAulaDetalheComponent} from '../salaDeAula/sala-de-aula-detalhe/sala-de-aula-detalhe.component';
import {PlanoDetalheComponent} from '../plano/plano-detalhe/plano-detalhe.component';

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
  {path: 'salaDeAula', component: SalaDeAulaComponent},
  {path: 'professorDetalhe', component: ProfessorDetalheComponent},
  {path: 'professorDetalhe/:id', component: ProfessorDetalheComponent},
  {path: 'alunoDetalhe', component: AunoDetalheComponent},
  {path: 'alunoDetalhe/:id', component: AunoDetalheComponent},
  {path: 'funcionarioDetalhe', component: FuncionarioDetalheComponent},
  {path: 'funcionarioDetalhe/:id', component: FuncionarioDetalheComponent},
  {path: 'turmaDetalhe', component: TurmaDetalheComponent},
  {path: 'turmaDetalhe/:id', component: TurmaDetalheComponent},
  {path: 'modalidadeDetalhe', component: ModalidadeDetalheComponent},
  {path: 'modalidadeDetalhe/:id', component: ModalidadeDetalheComponent},
  {path: 'salaDeAulaDetalhe', component: SalaDeAulaDetalheComponent},
  {path: 'salaDeAulaDetalhe/:id', component: SalaDeAulaDetalheComponent},
  {path: 'planoDetalhe', component: PlanoDetalheComponent},
  {path: 'planoDetalhe/:id', component: PlanoDetalheComponent}

];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
