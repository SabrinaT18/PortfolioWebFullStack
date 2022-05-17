import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from '../servicios/primer-servicio.service';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {
  aptitudesList: any;

  constructor(private primerServicio:PrimerServicioService) { }
 
  ngOnInit(): void { 
    this.primerServicio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.aptitudesList=data.aptitudes;
    });
  }
}
