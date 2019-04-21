import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url: string = 'http://localhost:8080/clientes';

  constructor(private http: Http) { }

  getAll(): Observable<Cliente[]> {
    return this.http.get(this.url).map(res => res.json()).catch(this.handleError);
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', error);
    return Observable.throw(erro);
  }
}
