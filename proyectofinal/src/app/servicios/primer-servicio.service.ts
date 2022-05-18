import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {
  /* url:string="" COMPLETAR*/
  constructor(private http:HttpClient) { }

  obtenerDatos (): Observable<any> {
    return this.http.get('./assets/data/data.Json');
/* COMPLETAR CUANDO TENGA URL DE LA SIGUIENTE FORMA:  
return this.http.get<any>(this.url+"persona"); */
  }
}
