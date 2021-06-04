import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';
import {ProfessorDto} from '../../../model/professor-dto';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(
    private professorService: ProfessorService,
    private location: Location,
    private router: Router
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'modalidade', 'acoes' ];

  professores: ProfessorDto[];
  dataSource;

  ngOnInit(): void {
    this.professorService.listarPrefessores().subscribe(dados => {
      this.professores = dados;
      //  const teste = Object.assign(professor, nome);
      this.dataSource = this.professores;
    });
  }


  salvar(): void{
    alert('VAIIII PFFF');
  }

}
