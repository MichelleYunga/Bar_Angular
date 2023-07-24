import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Producto } from '../modelo/producto';
import Swal from 'sweetalert2';
import { catchError, map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
  })
  
  export class ProductoService {
  
    private url = 'http://localhost:8080/api';
    UrlBuscar='';
    constructor(private httpClient:HttpClient) { };
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


     getProductos():Observable<Producto[]>{
      return this.httpClient.get<Producto[]>(this.url+'/listar').pipe(
        map(response => response as Producto[])
      )
    }


    getProducto(id: number):Observable<Producto>{
      return this.httpClient.get<Producto>(`${this.url}/${id}`);
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
    
      
      eliminar(id: number): Observable<Producto>{
        return this.httpClient.delete<Producto>(`${this.url}/${id}`);
      }


      ModificarProducto(request: any): Observable<any> {
        const id = request.id_producto;
        return this.httpClient.put<any>(`${this.url}/actualizar/${id}`, request).pipe(
          map(response => response as Producto[])
        );
      }

    
  subirFoto(archivo: File, id: any): Observable<Producto>{
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);
    return this.httpClient.post(`${this.url}/upload/`, formData).pipe(
      map((response: any) => response.producto as Producto), 
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
      );
  }
  }
  