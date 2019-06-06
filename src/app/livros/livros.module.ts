import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroCrudComponent } from './livro-crud/livro-crud.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ClientesModule } from '../clientes/clientes.module';
import { LivrosService } from './livros.service';
import { LivrosRoutingModule } from './livros-routing.module';

@NgModule({
  declarations: [LivroFormComponent, LivroCrudComponent, LivroListComponent],
  imports: [CommonModule, LivrosRoutingModule, FormsModule, HttpClientModule, HttpModule],
  providers: [LivrosService]
})
export class LivrosModule { }
