import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../service/producto.service';
import { Categoria } from '../modelo/categoria';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentPr implements OnInit{

  producto: Producto = new Producto();
  categorias: Categoria[] = [];
  CategoriaV: Categoria = new Categoria();
  selectedCatId: number=0;

  public titulo:string = "REGISTRO DE PRODUCTO";
  private imgSeleccionada: File;

  constructor(private productoService: ProductoService, private router: Router,
    private activatedRoute: ActivatedRoute){ }
  
  ngOnInit(): void {
    this.cargarProducto();
    this.obtenerCat()
  }

  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id_producto = params['id_producto']
      if(id_producto){
        this.productoService.getProducto(id_producto).subscribe((producto) =>this.producto=producto)
      }
    })
  }

  
obtenerCat() {
  this.productoService.obtenerCat().subscribe(
    (response: any[]) => {
      this.categorias = response; // Asigna la lista de roles a la variable roles en el componente
    },
    (error) => {
      console.log(error);
    }
  );
}

  public create():void{
    this.productoService.create(this.producto).subscribe(
      producto => {this.router.navigate(['/producto'])

      Swal.fire('Producto Guardado', `Producto ${producto.prod_descripcion} guardado con exito`, 'success')
    }
    )
  }

  seleccionarFoto(event: any){
    this.imgSeleccionada = event.target.files[0];
    console.log(this.imgSeleccionada);
  }

  subirImg(){
    this.productoService.subirFoto(this.imgSeleccionada, this.producto.id_producto)
    .subscribe(producto => {
      this.producto = producto;
    })
  }


  //METODOS EN USO PARA CARGA DE IMAGENES
  async loadProductoImg(event: any){
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    try{
      if(!allowedTypes.includes(file.type)){
        alert("solo se permiten archivos de tipo jpeg, jpg o png");
      }else{
        this.producto.prod_img = await this.convertToBase64(file);
      }
    } catch(error){
      console.error(error);
    }
  }
  
  async convertToBase64(file: File): Promise<string>{
    const reader = new FileReader();
    return new Promise<string>((resolve, reject)=>{
      reader.onload = () => {
        const result = btoa(reader.result as string);
        resolve(result);
      };
      reader.onerror = ()=>{
        reject(reader.error);
      };
      reader.readAsBinaryString(file);
    });
  }


}
