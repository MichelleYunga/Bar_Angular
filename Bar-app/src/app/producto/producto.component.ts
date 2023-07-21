import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';  
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../modelo/producto';
import Swal from 'sweetalert2';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit{

  

  @ViewChild('content', {static: false}) el!: ElementRef;
  productos: Producto[] = [];
  producto: Producto;

  constructor(private ProductoServi: ProductoService, private router: Router){}

  ngOnInit(): void {
    this.obtenerListaProductos();
 }
 

 obtenerListaProductos(){
  this.ProductoServi.getProductos().subscribe(
    productos => this.productos = productos
  );
 }


 eliminarProducto(prod_id: number){
  Swal.fire({
    title: '¿Estas seguro de eliminar este producto?',
    text: "No podras revertirlo!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#4361ee',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    buttonsStyling: true
  }).then((result) => {
    if (result.value) {
      this.ProductoServi.eliminar(prod_id).subscribe(
        productos => {this.ProductoServi.getProductos().subscribe(
          response => this.productos = response
        )
      Swal.fire(
        'Eliminado!',
        'Su producto ha sido eliminado'
      )
    })
  }
  })
 }


}