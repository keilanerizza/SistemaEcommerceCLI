import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string = 'http://localhost:8080/clientes';

  clientesChanged = new EventEmitter<Observable<Cliente[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get(this.url)
    .map(res => res.json())
    .catch(this.handleError);
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }

  add(cliente: Cliente) {
    return this.http.post(this.url,JSON.stringify(cliente),
    {headers: this.getHeaders()})
    .do(data => this.clientesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id), {headers: this.getHeaders()})
    .map(res => res.json())
    .do(data => this.clientesChanged.emit(this.getAll()))
    .catch(this.handleError);
  }
}
