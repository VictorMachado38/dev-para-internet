import { Component, OnInit } from '@angular/core';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {TurmaService} from '../../turma/turma.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ModalidadeService} from '../modalidade.service';
import {TurmaDto} from '../../../model/turma-dto';
import {Subscription} from 'rxjs';
import {ModalidadeDto} from '../../../model/modalidade-dto';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-modalidade-detalhe',
  templateUrl: './modalidade-detalhe.component.html',
  styleUrls: ['./modalidade-detalhe.component.css'],
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
export class ModalidadeDetalheComponent implements OnInit {

  constructor(
    private modalidadeService: ModalidadeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  modalidade: ModalidadeDto;

  formModalidade: FormGroup;

  matcher = new MyErrorStateMatcher();

  inscricao: Subscription;

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.modalidadeService.bucarModalidadesPorId(id).subscribe(dados => {
            this.modalidade = dados;
            this.formModalidade = this.fb.group({     // {5}
              id: [this.modalidade.id],
              nome: [this.modalidade.nome, [Validators.required, Validators.minLength(3)]],
              descricao: [this.modalidade.descricao, [Validators.required, Validators.minLength(3)]],

            });
            console.log(this.formModalidade);
          }, error => {console.error(error); });
        } else {
          this.modalidade = {
            id: null,
            nome: '',
            descricao: null
          };
          this.formModalidade = this.fb.group({     // {5}
            id: [this.modalidade.id],
            nome: [this.modalidade.nome, Validators.required],
            descricao: [this.modalidade.descricao, [Validators.required, Validators.minLength(3)]],
          });
        }
      });

  }

  // tslint:disable-next-line:typedef
  get getControl(){
    return this.formModalidade.controls;
  }


  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  onSubmit(): void {
    this.modalidade = this.formModalidade.value;
    if (this.modalidade.id === null){
      this.modalidadeService.salvarModalidade(this.modalidade).subscribe(() => {
        this.modalidadeService.showMessage('Modalidade salvo com sucesso', false);
      });
      this.router.navigate(['/modalidade']);
    }else{
      this.modalidadeService.editarModalidade(this.modalidade).subscribe(() => {
        this.modalidadeService.showMessage('Modalidade salvo com sucesso', false);
      });
      this.router.navigate(['/modalidade']);
    }
  }


}
