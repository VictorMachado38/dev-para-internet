import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {TurmaDto} from '../../model/turma-dto';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {ModalidadeDto} from '../../model/modalidade-dto';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  constructor(
    private httpModalidade: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  modalidade: ModalidadeDto[];

  listarModalidades(): Observable<ModalidadeDto[]> {
    const url = `${environment.config.URL_API}/modalidade/` ;
    return this.httpModalidade.get<ModalidadeDto[]>(url).pipe(
      map((modalidades) => modalidades)
    );
  }
}
