import { Component, OnInit } from '@angular/core';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {TurmaService} from '../../turma/turma.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TurmaDto} from '../../../model/turma-dto';
import {Subscription} from 'rxjs';
import {PlanoService} from '../plano.service';
import {PlanoDto} from '../../../model/plano-dto';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-plano-detalhe',
  templateUrl: './plano-detalhe.component.html',
  styleUrls: ['./plano-detalhe.component.css'],
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
export class PlanoDetalheComponent implements OnInit, ErrorStateMatcher {

  constructor(
    private planoService: PlanoService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  plano: PlanoDto;

  formPlano: FormGroup;

  matcher = new MyErrorStateMatcher();

  inscricao: Subscription;

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: Params) => {
        const id: number = +params.id;
        if (id) {
          this.planoService.bucarPlanosPorId(id).subscribe(dados => {
            this.plano = dados;
            this.formPlano = this.fb.group({     // {5}
              id: [this.plano.id],
              nomeDoPlano: [this.plano.nomeDoPlano, [Validators.required, Validators.minLength(3)]],
              valor: [this.plano.valor, [Validators.required, Validators.minLength(3)]],
            });
            console.log(this.formPlano);
          }, error => {console.error(error); });
        } else {
          this.plano = {
            id: null,
            nomeDoPlano: '',
            valor: null
          };
          this.formPlano = this.fb.group({     // {5}
            id: [this.plano.id],
            nomeDoPlano: [this.plano.nomeDoPlano, Validators.required],
            valor: [this.plano.valor, [Validators.required, Validators.minLength(3)]],

          });
        }
      });

  }


  // tslint:disable-next-line:typedef
  get getControl(){
    return this.formPlano.controls;
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  onSubmit(): void {
    this.plano = this.formPlano.value;
    if (this.plano.id === null){
      this.planoService.salvarPlano(this.plano).subscribe(() => {
        this.planoService.showMessage('Plano salvo com sucesso', false);
      });
      this.router.navigate(['/plano']);
    }else{
      this.planoService.editarPlano(this.plano).subscribe(() => {
        this.planoService.showMessage('Plano salvo com sucesso', false);
      });
      this.router.navigate(['/plano']);
    }
  }

}
