import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from 'src/app/servicios/primer-servicio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienceList:any;

  constructor(private primerServicio:PrimerServicioService ) { }

  ngOnInit(): void {
    this.primerServicio.obtenerDatos().subscribe(data =>{
      console.log(data);
     this.experienceList=data.experience;
    });
  }
}
