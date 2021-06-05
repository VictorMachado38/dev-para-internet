import { Component, OnInit } from '@angular/core';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {TurmaService} from '../../turma/turma.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SalaDeAulaService} from '../sala-de-aula.service';
import {TurmaDto} from '../../../model/turma-dto';
import {Subscription} from 'rxjs';
import {SalaDeAulaDto} from '../../../model/salaDeAula-dto';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sala-de-aula-detalhe',
  templateUrl: './sala-de-aula-detalhe.component.html',
  styleUrls: ['./sala-de-aula-detalhe.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class SalaDeAulaDetalheComponent implements OnInit, ErrorStateMatcher {

  constructor(
  private salaDeAulaService: SalaDeAulaService,
  private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute,
    ) { }

  salaDeAula: SalaDeAulaDto;

  formSalaDeAula: FormGroup;

  matcher = new MyErrorStateMatcher();

  inscricao: Subscription;


  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.salaDeAulaService.bucarSalaDeAulasPorId(id).subscribe(dados => {
            this.salaDeAula = dados;
            this.formSalaDeAula = this.fb.group({     // {5}
              id: [this.salaDeAula.id],
              numero: [this.salaDeAula.numero],

            });
            console.log(this.formSalaDeAula);
          }, error => {console.error(error); });
        } else {
          this.salaDeAula = {
            id: null,
            numero: null
          };
          this.formSalaDeAula = this.fb.group({     // {5}
            id: [this.salaDeAula.id],
            numero: [this.salaDeAula.numero],
          });
        }
      });

  }

  // tslint:disable-next-line:typedef
  get getControl(){
    return this.formSalaDeAula.controls;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }


  onSubmit(): void {
    this.salaDeAula = this.formSalaDeAula.value;
    if (this.salaDeAula.id === null){
      this.salaDeAulaService.salvarSalaDeAula(this.salaDeAula).subscribe(() => {
        this.salaDeAulaService.showMessage('Sala De Aula salvo com sucesso', false);
      });
      this.router.navigate(['/sala']);
    }else{
      this.salaDeAulaService.editarSalaDeAula(this.salaDeAula).subscribe(() => {
        this.salaDeAulaService.showMessage('Sala De Aula salvo com sucesso', false);
      });
      this.router.navigate(['/sala']);
    }
  }


}
