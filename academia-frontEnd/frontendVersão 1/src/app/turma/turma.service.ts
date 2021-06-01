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
    private httpCliente: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  turma: TurmaDto[];

  listarTurmas(): Observable<TurmaDto[]> {
    const url = `${environment.config.URL_API}/turma/` ;
    return this.httpCliente.get<TurmaDto[]>(url).pipe(
      map((turmas) => turmas)
    );
  }

}
