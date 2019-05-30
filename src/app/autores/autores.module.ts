import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorListComponent } from './autor-list/autor-list.component';
import { AutorFormComponent } from './autor-form/autor-form.component';
import { AutorCrudComponent } from './autor-crud/autor-crud.component';

@NgModule({
  declarations: [AutorListComponent, AutorFormComponent, AutorCrudComponent],
  imports: [
    CommonModule
  ]
})
export class AutoresModule { }
