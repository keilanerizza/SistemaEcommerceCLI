import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/login-guard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'livros', loadChildren: './livros/livros.module#LivrosModule', canActivate: [AuthGuard] },
  { path: 'autores', loadChildren: './autores/autores.module#AutoresModule', canActivate: [AuthGuard] },
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule', canActivate: [AuthGuard] },
  { path: 'estudantes', loadChildren: './estudantes/estudantes.module#EstudantesModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}