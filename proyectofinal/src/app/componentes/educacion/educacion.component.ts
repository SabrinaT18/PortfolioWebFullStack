import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from 'src/app/servicios/primer-servicio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList:any;
  constructor(private primerServicio:PrimerServicioService) { }

  ngOnInit(): void {
    this.primerServicio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.educacionList=data.education;
    });
  }
}
