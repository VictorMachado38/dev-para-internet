import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PlanoDto} from '../../model/plano-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(
    private httpPlano: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  plano: PlanoDto[];

  listarPlanos(): Observable<PlanoDto[]> {
    const url = `${environment.config.URL_API}/plano/` ;
    return this.httpPlano.get<PlanoDto[]>(url).pipe(
      map((turmas) => turmas)
    );
  }

  salvarPlano(plano: PlanoDto): Observable<PlanoDto>{
    const url = `${environment.config.URL_API}/plano/add` ;
    return this.httpPlano.post<PlanoDto>(url, plano).pipe(
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

  bucarPlanosPorId(id: number): Observable<PlanoDto> {
    const url = `${environment.config.URL_API}/plano/` ;
    return this.httpPlano.get<PlanoDto>(url + id).pipe(
      map((planoes) => planoes),
      catchError( (e) => this.errorHandler(e))
    );
  }

  editarPlano(plano: PlanoDto): Observable<PlanoDto>{
    const url = `${environment.config.URL_API}/plano/edit` ;
    return this.httpPlano.put<PlanoDto>(url, plano).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }


  deletarPlano(id: number): void {
    const url = `${environment.config.URL_API}/plano/delete/` ;
    this.httpPlano.delete<PlanoDto>(url + id).pipe(
      map((planoe) => planoe),
      catchError( (e) => this.errorHandler(e))
    );
  }
}
