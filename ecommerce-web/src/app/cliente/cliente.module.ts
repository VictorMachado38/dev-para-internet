import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [
    ClienteComponent
  ],
  exports: [
    ClienteComponent
  ],
  imports: [
    CommonModule

  ]
})
export class ClienteModule { }
