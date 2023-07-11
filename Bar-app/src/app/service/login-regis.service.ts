import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { administrador } from '../modelo/administrador';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisService {

  constructor(private http:HttpClient) { }
  private url='http://localhost:8080/api';

  getUsuarioUserPass(adm:administrador){

    return this.http.get<administrador>(this.url+"/administrador/"+adm.admusuario+"/"+adm.admcontrasena);

  }
}
