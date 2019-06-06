import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.sass']
})
export class LivroListComponent implements OnInit {

  constructor(private autorService: LivrosService) { }

  livros: Livro[] = [];

  ngOnInit() {

    this.autorService.getAll()
      .subscribe(data => this.livros = data, err => {
        alert('Aconteceu um erro!' + err);
        this.autorService.livrosChanged.subscribe(
          (observable: any) => observable.subscribe(
            data => this.livros = data
          )
        );
      })
  }

}
