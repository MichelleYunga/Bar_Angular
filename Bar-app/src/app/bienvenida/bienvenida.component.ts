import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bienvenida } from '../modelo/bienvenido';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor
  (

  private router:Router
  
  ){

    
  }

  ngOnInit(): void {
    
    this.as();
  }

  
  as(){

    (window as any).scroll(() => {
      const top: number = (document.body as any).scrollTop();
      if (top >= 400) {
        (document.querySelector("footer") as any).classList.add("topper");
      } else {
        (document.querySelector("footer") as any).classList.remove("topper");
      }
    });

    
    
    
  }

  


}













