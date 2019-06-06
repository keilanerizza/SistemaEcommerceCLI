import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudantesService } from '../estudantes.service';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrls: ['./estudante-form.component.sass']
})
export class EstudanteFormComponent implements OnInit {

  private estudanteIndex: number;
  private isNew: boolean;
  private estudante: Estudante;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private estudanteService: EstudantesService) { }

  ngOnInit() {
    this.novo();
    this.subscription =   this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.estudanteIndex = +params['id'];
          this.estudanteService.get(this.estudanteIndex)
          .subscribe(data => this.estudante = data);
        } else {
          this.isNew = true;
        }
      }
    )
  }

  novo() {
    this.estudante = new Estudante;
  }

  salvar() {
    let result;
    if(this.isNew) {
      result = this.estudanteService.add(this.estudante);
    } else {
      result = this.estudanteService.update(this.estudante);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso' +data),
    err => {
      alert("An error occurred " +err);
    });
  }

  excluir() {
    if(this.estudante.codigo == null) {
      alert("Selecione algum estudante");
    } else {
      if(confirm("Você realmente quer excluir o estudante " + this.estudante.nome + " ?"))
        this.estudanteService.remove(this.estudante.codigo)
        .subscribe(
          data => this.novo,
          err => {
            alert("Estudante não removido.");
          });
          this.novo();
          this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/estudantes']);
  }

}
