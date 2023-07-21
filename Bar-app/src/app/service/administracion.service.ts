import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cliente } from '../modelo/cliente';
import { Observable } from 'rxjs';
import { administrador } from '../modelo/administrador';

@Injectable({
  providedIn: 'root'
})

export class AdministracionService {

  private url = 'http://localhost:8080/api/administrador';

  constructor( private httpClient:HttpClient) { }

  registrarAdministrador(adm: administrador): Observable<Object>{
    return this.httpClient.post(`${this.url}`,adm);
  }
  

  

  
}
