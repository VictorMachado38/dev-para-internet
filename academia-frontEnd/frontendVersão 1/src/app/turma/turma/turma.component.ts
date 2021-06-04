import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {TurmaService} from '../turma.service';
import {TurmaDto} from '../../../model/turma-dto';


@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  constructor(
    private turmaService: TurmaService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'professor', 'modalidade' , 'acoes' ];

  turmas: TurmaDto[];
  dataSource;

  ngOnInit(): void {
    this.turmaService.listarTurmas().subscribe(dados => {
      this.turmas = dados;
    //  const teste = Object.assign(professor, nome);
      this.dataSource = this.turmas;
    });
  }

  salvar(): void{

  }

  editarCliente(): void{

  }



}
