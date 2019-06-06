import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.sass']
})
export class LivroFormComponent implements OnInit {

  private livroIndex: number;
  private isNew: boolean;
  private livro: Livro;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private livroService: LivrosService) { }

  ngOnInit() {
    this.novo();
    this.subscription =   this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.livroIndex = +params['id'];
          this.livroService.get(this.livroIndex)
          .subscribe(data => this.livro = data);
        } else {
          this.isNew = true;
        }
      }
    )
  }

  novo() {
    this.livro = new Livro;
  }

  salvar() {
    let result;
    if(this.isNew) {
      result = this.livroService.add(this.livro);
    } else {
      result = this.livroService.update(this.livro);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso' +data),
    err => {
      alert("An error occurred " +err);
    });
  }

  excluir() {
    if(this.livro.codigo == null) {
      alert("Selecione algum livro");
    } else {
      if(confirm("Você realmente quer excluir o livro " + this.livro.nome + " ?"))
        this.livroService.remove(this.livro.codigo)
        .subscribe(
          data => this.novo,
          err => {
            alert("Livro não removido.");
          });
          this.novo();
          this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/livros']);
  }

}
