import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudanteListComponent } from './estudante-list/estudante-list.component';
import { EstudanteFormComponent } from './estudante-form/estudante-form.component';

@NgModule({
  declarations: [EstudanteListComponent, EstudanteFormComponent],
  imports: [
    CommonModule
  ]
})
export class EstudantesModule { }
