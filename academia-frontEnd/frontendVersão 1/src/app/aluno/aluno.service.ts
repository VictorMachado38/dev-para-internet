import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AlunoDto} from '../../model/aluno-dto';
import {EMPTY, Observable} from 'rxjs';
import {TurmaDto} from '../../model/turma-dto';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {ProfessorDto} from '../../model/professor-dto';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(
    private httpAluno: HttpClient,
    private snackbar: MatSnackBar
  ) {
  }

  aluno: AlunoDto[];

  listarAlunos(): Observable<AlunoDto[]> {
    const url = `${environment.config.URL_API}/aluno/`;
    return this.httpAluno.get<AlunoDto[]>(url).pipe(
      map((alunos) => alunos)
    );
  }

  salvarAluno(aluno: AlunoDto): Observable<AlunoDto>{
    const url = `${environment.config.URL_API}/aluno/add` ;
    return this.httpAluno.post<AlunoDto>(url, aluno).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true );
    return EMPTY;
  }

  bucarPrefessoresPorId(id: number): Observable<AlunoDto> {
    const url = `${environment.config.URL_API}/aluno/` ;
    return this.httpAluno.get<AlunoDto>(url + id).pipe(
      map((alunos) => alunos),
      catchError( (e) => this.errorHandler(e))
    );
  }

  editarAluno(aluno: AlunoDto): Observable<AlunoDto>{
    const url = `${environment.config.URL_API}/cliente/edit` ;
    return this.httpAluno.put<AlunoDto>(url, aluno).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }
}
