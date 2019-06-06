import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-autor-form',
  templateUrl: './autor-form.component.html',
  styleUrls: ['./autor-form.component.sass']
})
export class AutorFormComponent implements OnInit {

  private autorIndex: number;
  private isNew: boolean;
  private autor: Autor;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private autorService: AutoresService) { }

  ngOnInit() {
    this.novo();
    this.subscription =   this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.autorIndex = +params['id'];
          this.autorService.get(this.autorIndex)
          .subscribe(data => this.autor = data);
        } else {
          this.isNew = true;
        }
      }
    )
  }

  novo() {
    this.autor = new Autor;
  }

  salvar() {
    let result;
    if(this.isNew) {
      result = this.autorService.add(this.autor);
    } else {
      result = this.autorService.update(this.autor);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso' +data),
    err => {
      alert("An error occurred " +err);
    });
  }

  excluir() {
    if(this.autor.codigo == null) {
      alert("Selecione algum autor");
    } else {
      if(confirm("Você realmente quer excluir o autor " + this.autor.nome + " ?"))
        this.autorService.remove(this.autor.codigo)
        .subscribe(
          data => this.novo,
          err => {
            alert("Cliente não removido.");
          });
          this.novo();
          this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/autores']);
  }

}
