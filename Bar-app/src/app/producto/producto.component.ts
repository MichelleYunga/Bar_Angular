import { Component } from '@angular/core';
import { ProductoService } from '../service/producto.service';  
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Producto } from '../modelo/producto';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {

  constructor(private ProductoServi: ProductoService){}

  producto: Producto[] = [];
  isupdate: boolean = false;
  selectedItemId: number | undefined;

  formProd: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.list();
    this.formProd = new FormGroup({
      IdProducto: new FormControl(''),
      prod_cod: new FormControl(''),
      prod_catidad: new FormControl(''),
      prod_descripcion: new FormControl(''),
      prod_precio: new FormControl(''),
      prod_img: new FormControl('')
    });
}

list(){
  this.ProductoServi.getProducto().subscribe(resp=>{
       if(resp){
        this.producto=resp;
       }
  });
}


update() {
  const id = this.selectedItemId;
  const request = {
    IdProducto: id,
    ...this.formProd.value
  };

  this.ProductoServi.ModificarProducto(request).subscribe(resp => {
    if (resp) {
      this.list();
      this.formProd.reset();
    }
  });
}


delete(id: any){
  this.ProductoServi.EliminarProducto(id).subscribe(resp=>{
    if(resp){
      this.list();
      
    }
});
}

EliminarProducto(id: any) {
  Swal.fire({
    title: '¿Estas seguro de eliminar el producto?',
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
      this.ProductoServi.EliminarProducto(id).subscribe(
        producto => {
          this.ProductoServi.getProducto().subscribe(
            response => this.producto = response
          )
          Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado'
          )
        })
    }
  })
}


save() {
  if (this.formProd.valid) {
    const prod = this.formProd.value;

    this.ProductoServi.create(prod).subscribe(
      (resp) => {
        this.list();
        this.formProd.reset();
        Swal.fire('Producto Registrado', 'Producto registrado con éxito', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Ocurrió un error al registrar el producto', 'error');
      }
    );
  }
}


newProducto(): void {
  this.isupdate = false;
  this.formProd.reset();
}

selectItem(item: any){
  this.isupdate = true;
  this.formProd.controls['IdProducto'].setValue(item.IdProducto);
  this.formProd.controls['prod_cod'].setValue(item.prod_cod);
  this.formProd.controls['prod_catidad'].setValue(item.prod_catidad);
  this.formProd.controls['prod_descripcion'].setValue(item.prod_descripcion);
  this.formProd.controls['prod_precio'].setValue(item.prod_precio);
  this.formProd.controls['prod_img'].setValue(item.prod_img);

}

}