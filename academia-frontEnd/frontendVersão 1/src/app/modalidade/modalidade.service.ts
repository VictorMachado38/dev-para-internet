import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EMPTY, Observable} from 'rxjs';
import {TurmaDto} from '../../model/turma-dto';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
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

  salvarModalidade(modalidade: ModalidadeDto): Observable<ModalidadeDto>{
    const url = `${environment.config.URL_API}/modalidade/add` ;
    return this.httpModalidade.post<ModalidadeDto>(url, modalidade).pipe(
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

  bucarModalidadesPorId(id: number): Observable<ModalidadeDto> {
    const url = `${environment.config.URL_API}/modalidade/` ;
    return this.httpModalidade.get<ModalidadeDto>(url + id).pipe(
      map((modalidadees) => modalidadees),
      catchError( (e) => this.errorHandler(e))
    );
  }

  editarModalidade(modalidade: ModalidadeDto): Observable<ModalidadeDto>{
    const url = `${environment.config.URL_API}/modalidade/edit` ;
    return this.httpModalidade.put<ModalidadeDto>(url, modalidade).pipe(
      map(obj => obj),
      catchError( (e) => this.errorHandler(e))
    );
  }


  deletarModalidade(id: number): void {
    const url = `${environment.config.URL_API}/modalidade/delete/` ;
    this.httpModalidade.delete<ModalidadeDto>(url + id).pipe(
      map((modalidadee) => modalidadee),
      catchError( (e) => this.errorHandler(e))
    );
  }


}
