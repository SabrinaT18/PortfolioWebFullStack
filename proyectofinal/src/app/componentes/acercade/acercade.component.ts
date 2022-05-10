import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from 'src/app/servicios/primer-servicio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  miPorfolio:any;
  constructor(private primerServicio:PrimerServicioService) { }

  ngOnInit(): void {
    this.primerServicio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.miPorfolio=data;
    });
  }
}
