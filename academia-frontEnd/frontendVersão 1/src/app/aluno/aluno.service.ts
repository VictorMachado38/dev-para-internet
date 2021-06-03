import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AlunoDto} from '../../model/aluno-dto';
import {Observable} from 'rxjs';
import {TurmaDto} from '../../model/turma-dto';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private httpAluno: HttpClient,
    private snaclbar: MatSnackBar
  ) {
  }

  aluno: AlunoDto[];

  listarAlunos(): Observable<AlunoDto[]> {
    const url = `${environment.config.URL_API}/aluno/`;
    return this.httpAluno.get<AlunoDto[]>(url).pipe(
      map((alunos) => alunos)
    );
  }


}
