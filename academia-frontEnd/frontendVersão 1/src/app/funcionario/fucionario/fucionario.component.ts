import { Component, OnInit } from '@angular/core';
import {TurmaService} from '../../turma/turma.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {FuncionarioDto} from '../../../model/funcionario-dto';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-fucionario',
  templateUrl: './fucionario.component.html',
  styleUrls: ['./fucionario.component.css']
})
export class FucionarioComponent implements OnInit {

  constructor(
    private funcionarioService: FuncionarioService,
    private location: Location,
    private router: Router
  ) {
  }

  displayedColumns: string[] = ['id', 'nome', 'funcao', 'acoes'];

  funcionarios: FuncionarioDto[];
  dataSource;

  ngOnInit(): void {
    this.funcionarioService.listarFuncionarios().subscribe(dados => {
      this.funcionarios = dados;
      //  const teste = Object.assign(professor, nome);
      this.dataSource = this.funcionarios;
    });

  }

   salvar(): void {

    }
}



