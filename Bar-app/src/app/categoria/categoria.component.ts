import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Categoria } from '../modelo/categoria';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent {

  constructor(private categoriaServ: CategoriaService){}

  categoria: Categoria[] = [];
  isupdate: boolean = false;
  selectedItemId: number | undefined;

  formCat: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.list();
    this.formCat = new FormGroup({
      id_categoria: new FormControl(''),
      nombre: new FormControl(''),
      tipo: new FormControl('')
    });
}

list(){
  this.categoriaServ.getCategoria().subscribe(resp=>{
       if(resp){
        this.categoria=resp;
       }
  });
}


update() {
  const id = this.selectedItemId;
  const request = {
    id_categoria: id,
    ...this.formCat.value
  };

  this.categoriaServ.ModificarCategoria(request).subscribe(resp => {
    if (resp) {
      this.list();
      this.formCat.reset();
    }
  });
}


delete(id: any){
  this.categoriaServ.EliminarCategoria(id).subscribe(resp=>{
    if(resp){
      this.list();
      
    }
});
}

EliminarCategoria(id: any) {
  Swal.fire({
    title: '¿Estas seguro de eliminar la categoria?',
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
      this.categoriaServ.EliminarCategoria(id).subscribe(
        categoria => {
          this.categoriaServ.getCategoria().subscribe(
            response => this.categoria = response
          )
          Swal.fire(
            'Eliminado!',
            'La categoria ha sido eliminada'
          )
        })
    }
  })
}


save() {
  if (this.formCat.valid) {
    const categoria = this.formCat.value;

    this.categoriaServ.create(categoria).subscribe(
      (resp) => {
        this.list();
        this.formCat.reset();
        Swal.fire('Categoria Registrada', 'Categoria registrada con éxito', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Ocurrió un error al registrar la Categoria', 'error');
      }
    );
  }
}


newCategoria(): void {
  this.isupdate = false;
  this.formCat.reset();
}

selectItem(item: any){
  this.isupdate = true;
  this.formCat.controls['id_categoria'].setValue(item.id_categoria);
  this.formCat.controls['nombre'].setValue(item.nombre);
  this.formCat.controls['tipo'].setValue(item.tipo);
}

}