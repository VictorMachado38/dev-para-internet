import { Component, OnInit } from '@angular/core';
import {SalaDeAulaDto} from '../../../model/salaDeAula-dto';
import {Router} from '@angular/router';
import {SalaDeAulaService} from '../sala-de-aula.service';

@Component({
  selector: 'app-sala-de-aula',
  templateUrl: './sala-de-aula.component.html',
  styleUrls: ['./sala-de-aula.component.css']
})
export class SalaDeAulaComponent implements OnInit {

  constructor(
    private salaDeAulasService: SalaDeAulaService,

  ) { }

  displayedColumns: string[] = ['id', 'numero', 'acoes' ];

  SalaDeAulas: SalaDeAulaDto[];
  dataSource;


  ngOnInit(): void {
    this.salaDeAulasService.listarSalaDeAulas().subscribe(dados => {
      this.SalaDeAulas = dados;
      //  const teste = Object.assign(professor, nome);
      this.dataSource = this.SalaDeAulas;
    });
  }

  salvar(): void{

  }
}
