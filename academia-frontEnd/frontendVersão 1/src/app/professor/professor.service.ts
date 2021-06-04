import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProfessorDto} from '../../model/professor-dto';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {TurmaDto} from '../../model/turma-dto';

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

}
