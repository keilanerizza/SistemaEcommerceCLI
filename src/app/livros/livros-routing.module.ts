import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroCrudComponent } from './livro-crud/livro-crud.component';

const routes: Routes = [
  { path: '', component: LivroCrudComponent},
  { path: ':id', component: LivroCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule {}