import { Component, OnInit } from '@angular/core';
import {ModalidadeService} from '../modalidade.service';
import {Router} from '@angular/router';
import {ModalidadeDto} from '../../../model/modalidade-dto';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  styleUrls: ['./modalidade.component.css']
})
export class ModalidadeComponent implements OnInit {

  constructor(
    private modalideServise: ModalidadeService
  ) { }

  displayedColumns: string[] = ['id_modalidade' , 'nome' , 'descricao' , 'acoes' ];

  modalidades: ModalidadeDto[];
  dataSource;

  ngOnInit(): void {
    this.modalideServise.listarModalidades().subscribe(dados => {
      this.modalidades = dados;
      //  const teste = Object.assign(professor, nome);
      this.dataSource = this.modalidades;
    });
  }

  salvar(): void{

  }

}
