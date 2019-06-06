import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'livros', loadChildren: './livros/livros.module#LivrosModule' },
  { path: 'autores', loadChildren: './autores/autores.module#AutoresModule' },
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule' },
  { path: 'estudantes', loadChildren: './estudantes/estudantes.module#EstudantesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}