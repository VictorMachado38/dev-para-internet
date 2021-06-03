import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(
    private httpProfessor: HttpClient,
    private snackbar: MatSnackBar
  ) { }



}
