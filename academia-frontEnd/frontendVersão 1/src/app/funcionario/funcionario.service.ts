import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FuncionarioDto} from '../../model/funcionario-dto';
import {EMPTY, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TurmaDto} from '../../model/turma-dto';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private httpFuncionario: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  funcionarios: FuncionarioDto[];


  listarFuncionarios(): Observable<FuncionarioDto[]>{
    const url = `${environment.config.URL_API}/funcionario/` ;
    return this.httpFuncionario.get<FuncionarioDto[]>(url).pipe(
      map((funcionarios) => funcionarios)
    );
  }

  salvarFuncionario(funcionario: FuncionarioDto): Observable<FuncionarioDto>{
    const url = `${environment.config.URL_API}/funcionario/add` ;
    return this.httpFuncionario.post<FuncionarioDto>(url, funcionario).pipe(
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

  bucarPrefessoresPorId(id: number): Observable<FuncionarioDto> {
    const url = `${environment.config.URL_API}/funcionario/` ;
    return this.httpFuncionario.get<FuncionarioDto>(url + id).pipe(
      map((funcionarioes) => funcionarioes),
      catchError( (e) => this.errorHandler(e))
    );
  }

  editarFuncionario(funcionario: FuncionarioDto): Observable<FuncionarioDto>{
    const url = `${environment.config.URL_API}/funcionario/edit` ;
    return this.httpFuncionario.put<FuncionarioDto>(url, funcionario).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }


  deletarPrefessores(id: number): void {
    const url = `${environment.config.URL_API}/funcionario/delete/` ;
    this.httpFuncionario.delete<FuncionarioDto>(url + id).pipe(
      map((funcionarios) => funcionarios),
      catchError( (e) => this.errorHandler(e))
    );
  }
}
