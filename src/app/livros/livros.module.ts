import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroCrudComponent } from './livro-crud/livro-crud.component';
import { LivroListComponent } from './livro-list/livro-list.component';

@NgModule({
  declarations: [LivroFormComponent, LivroCrudComponent, LivroListComponent],
  imports: [
    CommonModule
  ]
})
export class LivrosModule { }
