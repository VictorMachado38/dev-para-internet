import { Component, OnInit } from '@angular/core';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {ProfessorService} from '../../professor/professor.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FuncionarioService} from '../funcionario.service';
import {ProfessorDto} from '../../../model/professor-dto';
import {Subscription} from 'rxjs';
import {FuncionarioDto} from '../../../model/funcionario-dto';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-funcionario-detalhe',
  templateUrl: './funcionario-detalhe.component.html',
  styleUrls: ['./funcionario-detalhe.component.css'],
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
export class FuncionarioDetalheComponent implements OnInit, ErrorStateMatcher {

  constructor(
    private funcionarioService: FuncionarioService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  funcionario: FuncionarioDto;

  formFuncionario: FormGroup;

  matcher = new MyErrorStateMatcher();

  inscricao: Subscription;

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.funcionarioService.bucarPrefessoresPorId(id).subscribe(dados => {
            this.funcionario = dados;
            this.formFuncionario = this.fb.group({     // {5}
              id: [this.funcionario.id],
              nome: [this.funcionario.nome, [Validators.required, Validators.minLength(3)]],
              dataNascimento: [this.funcionario.dataNascimento],
              endereco: [this.funcionario.endereco, [Validators.required, Validators.minLength(3)]],
              telefone: [this.funcionario.telefone, [Validators.required, Validators.minLength(3)]],
              email: [this.funcionario.email, [Validators.required, Validators.minLength(3)]],
              sexo: [this.funcionario.sexo, [Validators.required, Validators.minLength(1)]],
              dataCadastro: [this.funcionario.dataNascimento],
              funcao: [this.funcionario.funcao, [Validators.required, Validators.minLength(3)]],
              descFuncao: [this.funcionario.descFuncao, [Validators.required, Validators.minLength(3)]],
            });
            console.log(this.formFuncionario);
          }, error => {console.error(error); });
        } else {
          this.funcionario = {
            id: null,
            nome: '',
            dataNascimento: null,
            endereco: null,
            telefone: null,
            email: null,
            sexo: null,
            dataCadastro: null,
            descFuncao: null,
            funcao: null
          };
          this.formFuncionario = this.fb.group({     // {5}
            id: [this.funcionario.id],
            nome: [this.funcionario.nome, Validators.required],
            dataNascimento: [this.funcionario.dataNascimento],
            endereco: [this.funcionario.endereco, [Validators.required, Validators.minLength(3)]],
            telefone: [this.funcionario.telefone, [Validators.required, Validators.minLength(3)]],
            email: [this.funcionario.email, [Validators.required, Validators.minLength(3)]],
            sexo: [this.funcionario.sexo, [Validators.required, Validators.minLength(1)]],
            dataCadastro: [this.funcionario.dataNascimento],
            funcao: [this.funcionario.funcao, [Validators.required, Validators.minLength(3)]],
            descFuncao: [this.funcionario.descFuncao, [Validators.required, Validators.minLength(3)]],
          });
        }
      });

  }

  // tslint:disable-next-line:typedef
  get getControl(){
    return this.formFuncionario.controls;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  onSubmit(): void {
    this.funcionario = this.formFuncionario.value;
    if (this.funcionario.id === null){
      this.funcionarioService.salvarFuncionario(this.funcionario).subscribe(() => {
        this.funcionarioService.showMessage('Funcionario salvo com sucesso', false);
      });
      this.router.navigate(['/funcionario']);
    }else{
      this.funcionarioService.editarFuncionario(this.funcionario).subscribe(() => {
        this.funcionarioService.showMessage('Funcionario salvo com sucesso', false);
      });
      this.router.navigate(['/funcionario']);
    }
  }


}
