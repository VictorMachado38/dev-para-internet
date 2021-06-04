import { Component, OnInit } from '@angular/core';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ProfessorService} from '../../professor/professor.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AlunoService} from '../aluno.service';
import {ProfessorDto} from '../../../model/professor-dto';
import {Subscription} from 'rxjs';
import {AlunoDto} from '../../../model/aluno-dto';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-auno-detalhe',
  templateUrl: './auno-detalhe.component.html',
  styleUrls: ['./auno-detalhe.component.css'],
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
export class AunoDetalheComponent implements OnInit, ErrorStateMatcher {

  constructor(
  private alunoService: AlunoService,
  private fb: FormBuilder,
  private router: Router,
  private route: ActivatedRoute,
  ) { }

  aluno: AlunoDto;

  formAluno: FormGroup;

  matcher = new MyErrorStateMatcher();

  inscricao: Subscription;

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.alunoService.bucarPrefessoresPorId(id).subscribe(dados => {
            this.aluno = dados;
            this.formAluno = this.fb.group({     // {5}
              id: [this.aluno.id],
              nome: [this.aluno.nome, [Validators.required, Validators.minLength(3)]],
              dataNascimento: [this.aluno.dataNascimento],
              endereco: [this.aluno.endereco, [Validators.required, Validators.minLength(3)]],
              telefone: [this.aluno.telefone, [Validators.required, Validators.minLength(3)]],
              email: [this.aluno.email, [Validators.required, Validators.minLength(3)]],
              sexo: [this.aluno.sexo, [Validators.required, Validators.minLength(1)]],
              dataCadastro: [this.aluno.dataNascimento],
              matricula: [this.aluno.matricula, [Validators.required, Validators.minLength(3)]],
            });
            console.log(this.formAluno);
          }, error => {console.error(error); });
        } else {
          this.aluno = {
            id: null,
            nome: '',
            dataNascimento: null,
            endereco: null,
            telefone: null,
            email: null,
            sexo: null,
            dataCadastro: null,
            matricula: null,
            plano: null
          };
          this.formAluno = this.fb.group({     // {5}
            id: [this.aluno.id],
            nome: [this.aluno.nome, Validators.required],
            dataNascimento: [this.aluno.dataNascimento],
            endereco: [this.aluno.endereco, [Validators.required, Validators.minLength(3)]],
            telefone: [this.aluno.telefone, [Validators.required, Validators.minLength(3)]],
            email: [this.aluno.email, [Validators.required, Validators.minLength(3)]],
            sexo: [this.aluno.sexo, [Validators.required, Validators.minLength(1)]],
            dataCadastro: [this.aluno.dataNascimento],
            matricula: [this.aluno.matricula, [Validators.required, Validators.minLength(3)]],
          });
        }
      });

  }

  // tslint:disable-next-line:typedef
  get getControl(){
    return this.formAluno.controls;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  onSubmit(): void {
    this.aluno = this.formAluno.value;
    if (this.aluno.id === null){
      this.alunoService.salvarAluno(this.aluno).subscribe(() => {
        this.alunoService.showMessage('aluno salvo com sucesso', false);
      });
      this.router.navigate(['/aluno']);
    }else{
      this.alunoService.editarAluno(this.aluno).subscribe(() => {
        this.alunoService.showMessage('Aluno salvo com sucesso', false);
      });
      this.router.navigate(['/aluno']);
    }
  }


}
