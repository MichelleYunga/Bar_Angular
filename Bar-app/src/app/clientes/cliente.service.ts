import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/api/datos-relacionados';

  constructor(private http: HttpClient) { }

  obtenerDatosRelacionados(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }
}
