import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroFormComponent } from './livro-form/livro-form.component';
import { LivroCrudComponent } from './livro-crud/livro-crud.component';

@NgModule({
  declarations: [LivroFormComponent, LivroCrudComponent],
  imports: [
    CommonModule
  ]
})
export class LivrosModule { }
