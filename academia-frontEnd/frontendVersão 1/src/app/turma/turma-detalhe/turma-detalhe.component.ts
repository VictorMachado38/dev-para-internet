import { Component, OnInit } from '@angular/core';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ProfessorService} from '../../professor/professor.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProfessorDto} from '../../../model/professor-dto';
import {Subscription} from 'rxjs';
import {TurmaDto} from '../../../model/turma-dto';
import {TurmaService} from '../turma.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-turma-detalhe',
  templateUrl: './turma-detalhe.component.html',
  styleUrls: ['./turma-detalhe.component.css'],
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
export class TurmaDetalheComponent implements OnInit, ErrorStateMatcher {

  constructor(
    private turmaService: TurmaService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  turma: TurmaDto;

  formTurma: FormGroup;

  matcher = new MyErrorStateMatcher();

  inscricao: Subscription;



  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.turmaService.bucarTurmasPorId(id).subscribe(dados => {
            this.turma = dados;
            this.formTurma = this.fb.group({     // {5}
              id: [this.turma.id],
              nome: [this.turma.nome, [Validators.required, Validators.minLength(3)]],
              maxAluno: [this.turma.maxAluno, [Validators.required, Validators.minLength(3)]],
              horario: [this.turma.horario, [Validators.required, Validators.minLength(3)]],

            });
            console.log(this.formTurma);
          }, error => {console.error(error); });
        } else {
          this.turma = {
            id: null,
            nome: '',
            vagas: null,
            Professor: null,
            maxAluno: null,
            horario: null
          };
          this.formTurma = this.fb.group({     // {5}
            id: [this.turma.id],
            nome: [this.turma.nome, Validators.required],
            maxAluno: [this.turma.maxAluno, [Validators.required, Validators.minLength(3)]],
            horario: [this.turma.horario, [Validators.required, Validators.minLength(3)]],
          });
        }
      });

  }

  // tslint:disable-next-line:typedef
  get getControl(){
    return this.formTurma.controls;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  onSubmit(): void {
    this.turma = this.formTurma.value;
    if (this.turma.id === null){
      this.turmaService.salvarTurma(this.turma).subscribe(() => {
        this.turmaService.showMessage('Turma salvo com sucesso', false);
      });
      this.router.navigate(['/turma']);
    }else{
      this.turmaService.editarTurma(this.turma).subscribe(() => {
        this.turmaService.showMessage('Turma salvo com sucesso', false);
      });
      this.router.navigate(['/turma']);
    }
  }

}
