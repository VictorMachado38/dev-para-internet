import { Component, OnInit } from '@angular/core';
import {PlanoService} from '../plano.service';
import {PlanoDto} from '../../../model/plano-dto';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css']
})
export class PlanoComponent implements OnInit {

  constructor(
    private planoService: PlanoService
  ) { }

  displayedColumns: string[] = ['id', 'nomeDoPlano' , 'valor' , 'acoes' ];

  planos: PlanoDto[];
  dataSource;

  ngOnInit(): void {
    this.planoService.listarPlanos().subscribe(dados => {
      this.planos = dados;
      //  const teste = Object.assign(professor, nome);
      this.dataSource = this.planos;
    });
  }

  salvar(): void{

  }

}
