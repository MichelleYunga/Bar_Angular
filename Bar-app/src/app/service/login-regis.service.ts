import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { administrador } from '../modelo/administrador';
import { persona } from '../modelo/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisService {

  constructor(private http:HttpClient) { }
  private url='http://localhost:8080/api';

  getUsuarioUserPass(adm:administrador){

    return this.http.get<administrador>(this.url+"/administrador/"+adm.usuario+"/"+adm.contrase);

  }

  getPersonaCedula(pers:persona){
    return this.http.get<persona>(this.url+"/personaced/"+pers.cedula);
  }

  createPersona(pers:persona):Observable<persona>{
    return this.http.post<persona>(this.url+"/persona",pers);

  }
  createAdmnistrador(adm:administrador):Observable<administrador>{
    return this.http.post<administrador>(this.url+"/administrador",adm);
  }
  

  
}
