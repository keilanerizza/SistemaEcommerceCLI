import { Component, OnInit } from '@angular/core';
import { EstudantesService } from '../estudantes.service';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudante-list',
  templateUrl: './estudante-list.component.html',
  styleUrls: ['./estudante-list.component.sass']
})
export class EstudanteListComponent implements OnInit {

  constructor(private autorService: EstudantesService) { }

  estudantes: Estudante[] = [];

  ngOnInit() {

    this.autorService.getAll()
      .subscribe(data => this.estudantes = data, err => {
        alert('Aconteceu um erro!' + err);
        this.autorService.estudantesChanged.subscribe(
          (observable: any) => observable.subscribe(
            data => this.estudantes = data
          )
        );
      })
  }

}
