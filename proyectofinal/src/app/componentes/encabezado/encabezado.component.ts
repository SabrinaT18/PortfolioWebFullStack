import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from 'src/app/servicios/primer-servicio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
 miPorfolio:any;
  constructor(private primerServicio:PrimerServicioService) { }

  ngOnInit(): void {
    this.primerServicio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.miPorfolio=data;
    });
  }
  }
