import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from 'src/app/servicios/primer-servicio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 proyectosList: any;
  constructor(private primerServicio:PrimerServicioService) { }

  ngOnInit(): void {
    this.primerServicio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.proyectosList=data.proyectos;
    });
  }

}
