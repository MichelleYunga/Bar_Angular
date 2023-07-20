import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Producto } from '../modelo/producto';

@Injectable({
    providedIn: 'root'
  })
  
  export class ProductoService {
  
    private url = 'http://localhost:8080/productos';
    UrlBuscar='';
    constructor(private httpClient:HttpClient) { };
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

      getProducto():Observable<Producto[]>{
        return this.httpClient.get<Producto[]>(this.url+'/listar').pipe(
          map(response => response as Producto[])
        )
      }
    
      postProducto(request:any):Observable<any>{
        return this.httpClient.post<any>(this.url + '/agregar', request).pipe(
          map(response => response as Producto[])
        )
    
      }

      create(request: any): Observable<any> {
   
        return this.httpClient.post<any>(this.url+ '/agregar', request).pipe(
          map(response => response as Producto[])
        );
      }
    
      
      EliminarProducto(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.url+'/eliminar/'+id).pipe(
          map(response => response as Producto[])
        )
    
      }
      ModificarProducto(request: any): Observable<any> {
        const id = request.IdProducto;
        return this.httpClient.put<any>(`${this.url}/actualizar/${id}`, request).pipe(
          map(response => response as Producto[])
        );
      }

  }
  