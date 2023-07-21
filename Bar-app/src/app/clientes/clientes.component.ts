import { Component, OnInit } from '@angular/core';
import { ClienteService} from './cliente.service';
import { Persona } from './persona';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  personas: Persona []=[];
  clientes: Cliente [] = [];


  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {

    this.clienteService.obtenerDatosRelacionados().subscribe(
      data => this.personas = data,
      error => console.log(error)
    );
    
  }
}
