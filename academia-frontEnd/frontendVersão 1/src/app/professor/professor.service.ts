import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProfessorDto} from '../../model/professor-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {TurmaDto} from '../../model/turma-dto';
import {ClienteDto} from '../../model/cliente-dto';

@Injectable({

  providedIn: 'root'
})
export class ProfessorService {

  constructor(
    private httpProfessor: HttpClient,
    private snackbar: MatSnackBar
  ) { }


  professor: ProfessorDto[];

  listarPrefessores(): Observable< ProfessorDto[]> {
    const url = `${environment.config.URL_API}/professor/` ;
    return this.httpProfessor.get< ProfessorDto[]>(url).pipe(
      map((professores) => professores)
    );
  }

  salvarProfessor(professor: ProfessorDto): Observable<ProfessorDto>{
    const url = `${environment.config.URL_API}/professor/add` ;
    return this.httpProfessor.post<ProfessorDto>(url, professor).pipe(
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

  bucarPrefessoresPorId(id: number): Observable<ProfessorDto> {
    const url = `${environment.config.URL_API}/professor/` ;
    return this.httpProfessor.get<ProfessorDto>(url + id).pipe(
      map((professores) => professores),
      catchError( (e) => this.errorHandler(e))
    );
  }

  editarProessor(professor: ProfessorDto): Observable<ProfessorDto>{
    const url = `${environment.config.URL_API}/cliente/edit` ;
    return this.httpProfessor.put<ProfessorDto>(url, professor).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
}


  deletarPrefessores(id: number): void {
    const url = `${environment.config.URL_API}/professor/delete/` ;
    this.httpProfessor.delete<ProfessorDto>(url + id).pipe(
      map((professore) => professore),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
