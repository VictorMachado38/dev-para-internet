import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {AlunoService} from '../aluno.service';
import {AlunoDto} from '../../../model/aluno-dto';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(
    private alinuService: AlunoService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'matricula', 'plano', 'valor' , 'acoes' ];

  alunos: AlunoDto[];
  dataSource;


  ngOnInit(): void {
    this.alinuService.listarAlunos().subscribe(dados => {
      this.alunos = dados;
      //  const teste = Object.assign(professor, nome);
      this.dataSource = this.alunos;
    });
  }

  salvar(): void{

  }

}
