import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudanteListComponent } from './estudante-list/estudante-list.component';
import { EstudanteFormComponent } from './estudante-form/estudante-form.component';
import { EstudanteCrudComponent } from './estudante-crud/estudante-crud.component';

@NgModule({
  declarations: [EstudanteListComponent, EstudanteFormComponent, EstudanteCrudComponent],
  imports: [
    CommonModule
  ]
})
export class EstudantesModule { }
