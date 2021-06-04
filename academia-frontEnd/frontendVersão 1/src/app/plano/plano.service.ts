import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PlanoDto} from '../../model/plano-dto';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

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
}
