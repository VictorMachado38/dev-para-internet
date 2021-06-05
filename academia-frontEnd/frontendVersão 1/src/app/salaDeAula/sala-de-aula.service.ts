import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SalaDeAulaDto} from '../../model/salaDeAula-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalaDeAulaService {

  constructor(
    private httpSalaDeAula: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  salaDeAUla: SalaDeAulaDto[];

  listarSalaDeAulas(): Observable<SalaDeAulaDto[]> {
    const url = `${environment.config.URL_API}/sala/` ;
    return this.httpSalaDeAula.get<SalaDeAulaDto[]>(url).pipe(
      map((salaDeAUlas) => salaDeAUlas)
    );
  }

  salvarSalaDeAula(salaDeAula: SalaDeAulaDto): Observable<SalaDeAulaDto>{
    const url = `${environment.config.URL_API}/sala/add` ;
    return this.httpSalaDeAula.post<SalaDeAulaDto>(url, salaDeAula).pipe(
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

  bucarSalaDeAulasPorId(id: number): Observable<SalaDeAulaDto> {
    const url = `${environment.config.URL_API}/sala/` ;
    return this.httpSalaDeAula.get<SalaDeAulaDto>(url + id).pipe(
      map((salaDeAulaes) => salaDeAulaes),
      catchError( (e) => this.errorHandler(e))
    );
  }

  editarSalaDeAula(salaDeAula: SalaDeAulaDto): Observable<SalaDeAulaDto>{
    const url = `${environment.config.URL_API}/sala/edit` ;
    return this.httpSalaDeAula.put<SalaDeAulaDto>(url, salaDeAula).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }


  deletarSalaDeAula(id: number): void {
    const url = `${environment.config.URL_API}/salaDeAula/delete/` ;
    this.httpSalaDeAula.delete<SalaDeAulaDto>(url + id).pipe(
      map((salaDeAulae) => salaDeAulae),
      catchError( (e) => this.errorHandler(e))
    );
  }

}
