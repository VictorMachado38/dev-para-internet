import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {ClienteModule} from './cliente/cliente.module';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ClienteRoutingModule} from './cliente/cliente-routing.module';
import { TurmaComponent } from './turma/turma/turma.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    TurmaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ClienteModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    ClienteRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
