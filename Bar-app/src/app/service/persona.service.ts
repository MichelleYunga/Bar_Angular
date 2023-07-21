import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { persona } from "../modelo/persona";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

export class PersonaService{
    constructor(private http:HttpClient){ }

    private url='http://localhost:8080/api/persona';

    registrarPersonas(pers:persona): Observable<Object> {
        return this.http.post(`${this.url}`, pers);
      }

}