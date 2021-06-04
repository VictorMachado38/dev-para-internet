import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../cliente/cliente.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProfessorService} from '../professor.service';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {Subscription} from 'rxjs';
import {ClienteDto} from '../../../model/cliente-dto';
import {ProfessorDto} from '../../../model/professor-dto';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-professor-detalhe',
  templateUrl: './professor-detalhe.component.html',
  styleUrls: ['./professor-detalhe.component.css'],
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
export class ProfessorDetalheComponent implements OnInit, ErrorStateMatcher{

  constructor(
    private professorService: ProfessorService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  professor: ProfessorDto;

  formProfessor: FormGroup;

  matcher = new MyErrorStateMatcher();

  inscricao: Subscription;


  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.professorService.bucarPrefessoresPorId(id).subscribe(dados => {
            this.professor = dados;
            this.formProfessor = this.fb.group({     // {5}
              id: [this.professor.id],
              nome: [this.professor.nome, [Validators.required, Validators.minLength(3)]],
              dataNascimento: [this.professor.dataNascimento],
              endereco: [this.professor.endereco, [Validators.required, Validators.minLength(3)]],
              telefone: [this.professor.telefone, [Validators.required, Validators.minLength(3)]],
              email: [this.professor.email, [Validators.required, Validators.minLength(3)]],
              sexo: [this.professor.sexo, [Validators.required, Validators.minLength(1)]],
              dataCadastro: [this.professor.dataNascimento]
            });
            console.log(this.formProfessor);
          }, error => {console.error(error); });
        } else {
          this.professor = {
            id: null,
            nome: '',
            dataNascimento: null,
            endereco: null,
            telefone: null,
            email: null,
            sexo: null,
            dataCadastro: null
          };
          this.formProfessor = this.fb.group({     // {5}
            id: [this.professor.id],
            nome: [this.professor.nome, Validators.required],
            dataNascimento: [this.professor.dataNascimento],
            endereco: [this.professor.endereco, [Validators.required, Validators.minLength(3)]],
            telefone: [this.professor.telefone, [Validators.required, Validators.minLength(3)]],
            email: [this.professor.email, [Validators.required, Validators.minLength(3)]],
            sexo: [this.professor.sexo, [Validators.required, Validators.minLength(1)]],
            dataCadastro: [this.professor.dataNascimento]
          });
        }
      });

  }
  /*
  ngOnInit(): void {
    this.formProfessor = this.fb.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(4)]],
      dataNascimento: ['', [Validators.required]]
     // cpf: ['', [Validators.required]],
      //primeiroNome: ['', [Validators.required]],

    });
  }
*/

  // tslint:disable-next-line:typedef
  get getControl(){
    return this.formProfessor.controls;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  /*
  onSubmit(): void {
    this.professor = this.formProfessor.value;
    this.professorService.salvarProfessor(this.professor).subscribe(() => {
      this.professorService.showMessage('Professor salvo com sucesso', false);
    });
    this.router.navigate(['/professor']);
  }
  */
  onSubmit(): void {
    this.professor = this.formProfessor.value;
    if (this.professor.id === null){
      this.professorService.salvarProfessor(this.professor).subscribe(() => {
        this.professorService.showMessage('Professor salvo com sucesso', false);
      });
      this.router.navigate(['/professor']);
    }else{
      this.professorService.editarProessor(this.professor).subscribe(() => {
        this.professorService.showMessage('Professor salvo com sucesso', false);
      });
      this.router.navigate(['/professor']);
    }
  }


}
