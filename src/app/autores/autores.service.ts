import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

import { Observable, of, throwError, pipe } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Autor } from './autor';

/* import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'; */

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private url: string = 'http://localhost:8080/autores';

  autoresChanged = new EventEmitter<Observable<Autor[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Autor[]> {
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

  add(autor: Autor) {
    return this.http.post(this.url,JSON.stringify(autor),
    {headers: this.getHeaders()})
    pipe(
      tap(data => this.autoresChanged.emit(this.getAll())),
      catchError(this.handleError));
  }
  
  remove(id: number) {
    return this.http.delete(this.getUrl(id),
    {headers: this.getHeaders()})
    .pipe(
      map(res => res.json()),
      tap(data => this.autoresChanged.emit(this.getAll())),
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

  update(autor: Autor) {
    return this.http.put(this.url,JSON.stringify(autor),
    {headers: this.getHeaders()})
    .pipe(
      tap(data => this.autoresChanged.emit(this.getAll())),
      catchError(this.handleError));
  }

  get(id: number) {
    return this.getAll()
      .pipe(
        map((list: any) => list.find(autor => autor.codigo == id)),
        catchError(this.handleError));
  }
}
