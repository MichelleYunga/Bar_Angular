import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';  
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../modelo/producto';
import Swal from 'sweetalert2';
import { ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit{

  

  @ViewChild('content', {static: false}) el!: ElementRef;
  productos: Producto[] = [];
  producto: Producto;
  isupdate: boolean = false;
  selectedItemId: number | undefined;

  formprod: FormGroup = new FormGroup({});


  constructor(private ProductoServi: ProductoService, private router: Router){}

  ngOnInit(): void {
    this.obtenerListaProductos();
 }
 

 ModificarProducto() {
  const id = this.selectedItemId;
  const request = {
    id_producto: id,
    ...this.formprod.value
  };

  this.ProductoServi.ModificarProducto(request).subscribe(resp => {
    if (resp) {
      this.obtenerListaProductos();
      this.formprod.reset();
    }
  });
}

selectItem(item: any){
  this.isupdate = true;
  this.formprod.controls['id_producto'].setValue(item.id_producto);
  this.formprod.controls['prod_catidad'].setValue(item.prod_catidad);
  this.formprod.controls['prod_descripcion'].setValue(item.prod_descripcion);
  this.formprod.controls['prod_img'].setValue(item.prod_img);
}

newCategoria(): void {
  this.isupdate = false;
  this.formprod.reset();
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