import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FuncionarioDto} from '../../model/funcionario-dto';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TurmaDto} from '../../model/turma-dto';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(
    private httpCliente: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  funcionarios: FuncionarioDto[];


  listarFuncionarios(): Observable<FuncionarioDto[]>{
    const url = `${environment.config.URL_API}/funcionario/` ;
    return this.httpCliente.get<FuncionarioDto[]>(url).pipe(
      map((funcionarios) => funcionarios)
    );
  }
}
