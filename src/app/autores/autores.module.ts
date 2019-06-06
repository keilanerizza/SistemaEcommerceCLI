import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutorFormComponent } from './autor-form/autor-form.component';
import { AutorCrudComponent } from './autor-crud/autor-crud.component';
import { FilterPipe } from '../clientes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AutoresService } from './autores.service';
import { AutoresRoutingModule } from './autores-routing.module';
import { ClientesModule } from '../clientes/clientes.module';

@NgModule({
  declarations: [AutorListComponent, AutorFormComponent, AutorCrudComponent],
  imports: [CommonModule, AutoresRoutingModule, FormsModule, HttpClientModule, HttpModule],
  providers: [AutoresService]
})
export class AutoresModule { }