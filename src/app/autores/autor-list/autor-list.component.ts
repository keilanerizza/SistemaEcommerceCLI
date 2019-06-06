import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.sass']
})
export class AutorListComponent implements OnInit {

  constructor(private autorService: AutoresService) { }

  autores: Autor[] = [];

  ngOnInit() {

    this.autorService.getAll()
      .subscribe(data => this.autores = data, err => {
        alert('Aconteceu um erro!' + err);
        this.autorService.autoresChanged.subscribe(
          (observable: any) => observable.subscribe(
            data => this.autores = data
          )
        );
      })
  }

}
