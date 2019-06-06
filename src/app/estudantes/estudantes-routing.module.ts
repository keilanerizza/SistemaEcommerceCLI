import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudanteCrudComponent } from './estudante-crud/estudante-crud.component';

const routes: Routes = [
  { path: '', component: EstudanteCrudComponent},
  { path: ':id', component: EstudanteCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudantesRoutingModule {}