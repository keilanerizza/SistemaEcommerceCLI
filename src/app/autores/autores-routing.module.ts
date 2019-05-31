import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorCrudComponent } from './autor-crud/autor-crud.component';

const routes: Routes = [
  { path: '', component: AutorCrudComponent},
  { path: ':id', component: AutorCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule {}