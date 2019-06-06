import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

import { Observable, of, throwError, pipe } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Estudante } from './estudante';

/* import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'; */

@Injectable({
  providedIn: 'root'
})
export class EstudantesService {

  private url: string = 'http://localhost:8080/estudantes';

  estudantesChanged = new EventEmitter<Observable<Estudante[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Estudante[]> {
    return this.http.get(this.url)
    .pipe(
      map(res => res.json().data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  add(estudante: Estudante) {
    return this.http.post(this.url,JSON.stringify(estudante),
    {headers: this.getHeaders()})
    pipe(
      tap(data => this.estudantesChanged.emit(this.getAll())),
      catchError(this.handleError));
  }
  
  remove(id: number) {
    return this.http.delete(this.getUrl(id),
    {headers: this.getHeaders()})
    .pipe(
      map(res => res.json()),
      tap(data => this.estudantesChanged.emit(this.getAll())),
      catchError(this.handleError));
  }
  
  getHeaders(): any {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }
  
  getUrl(id: number) {
    return `${this.url}/${id}`;
  }

  update(estudante: Estudante) {
    return this.http.put(this.url,JSON.stringify(estudante),
    {headers: this.getHeaders()})
    .pipe(
      tap(data => this.estudantesChanged.emit(this.getAll())),
      catchError(this.handleError));
  }

  get(id: number) {
    return this.getAll()
      .pipe(
        map((list: any) => list.find(estudante => estudante.codigo == id)),
        catchError(this.handleError));
  }
}
