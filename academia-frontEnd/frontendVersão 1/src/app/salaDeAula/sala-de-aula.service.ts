import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SalaDeAulaDto} from '../../model/salaDeAula-dto';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

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
}
