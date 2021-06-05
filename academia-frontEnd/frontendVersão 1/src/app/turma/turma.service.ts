import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TurmaDto} from '../../model/turma-dto';
import {EMPTY, Observable, Subscription} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(
    private httpTurma: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  turma: TurmaDto[];

  listarTurmas(): Observable<TurmaDto[]> {
    const url = `${environment.config.URL_API}/turma/` ;
    return this.httpTurma.get<TurmaDto[]>(url).pipe(
      map((turmas) => turmas)
    );
  }

  salvarTurma(turma: TurmaDto): Observable<TurmaDto>{
    const url = `${environment.config.URL_API}/turma/add` ;
    return this.httpTurma.post<TurmaDto>(url, turma).pipe(
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

  bucarTurmasPorId(id: number): Observable<TurmaDto> {
    const url = `${environment.config.URL_API}/turma/` ;
    return this.httpTurma.get<TurmaDto>(url + id).pipe(
      map((turmaes) => turmaes),
      catchError( (e) => this.errorHandler(e))
    );
  }

  editarTurma(turma: TurmaDto): Observable<TurmaDto>{
    const url = `${environment.config.URL_API}/turma/edit` ;
    return this.httpTurma.put<TurmaDto>(url, turma).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }


  deletarTurma(id: number): void {
    const url = `${environment.config.URL_API}/turma/delete/` ;
    this.httpTurma.delete<TurmaDto>(url + id).pipe(
      map((turmae) => turmae),
      catchError( (e) => this.errorHandler(e))
    );
  }


}
