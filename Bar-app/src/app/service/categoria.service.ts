import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from '../modelo/categoria';

@Injectable({
    providedIn: 'root'
  })
  
  export class CategoriaService {
  
    private url = 'http://localhost:8080/api';
    UrlBuscar='';
    constructor(private httpClient:HttpClient) { };
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

      getCategoria():Observable<Categoria[]>{
        return this.httpClient.get<Categoria[]>(this.url+'/productocategoria/list').pipe(
          map(response => response as Categoria[])
        )
      }
    
      postCategoria(request:any):Observable<any>{
        return this.httpClient.post<any>(this.url + '/productocategoria/create', request).pipe(
          map(response => response as Categoria[])
        )
    
      }

      create(request: any): Observable<any> {
   
        return this.httpClient.post<any>(this.url+ '/productocategoria/create', request).pipe(
          map(response => response as Categoria[])
        );
      }
    
      
      EliminarCategoria(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.url+'/productocategoria/Eliminar/'+id).pipe(
          map(response => response as Categoria[])
        )
    
      }
      ModificarCategoria(request: any): Observable<any> {
        const id = request.id_categoria;
        return this.httpClient.put<any>(`${this.url}/productocategoria/Editar/${id}`, request).pipe(
          map(response => response as Categoria[])
        );
      }

  }
  