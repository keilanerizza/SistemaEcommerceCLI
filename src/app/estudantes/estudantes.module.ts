import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudanteListComponent } from './estudante-list/estudante-list.component';
import { EstudanteFormComponent } from './estudante-form/estudante-form.component';
import { EstudanteCrudComponent } from './estudante-crud/estudante-crud.component';
import { EstudantesRoutingModule } from './estudantes-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EstudantesService } from './estudantes.service';

@NgModule({
  declarations: [EstudanteListComponent, EstudanteFormComponent, EstudanteCrudComponent],
  imports: [CommonModule, EstudantesRoutingModule, FormsModule, HttpClientModule, HttpModule],
  providers: [EstudantesService]
})
export class EstudantesModule { }
