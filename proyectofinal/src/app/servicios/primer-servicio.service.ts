import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {
  url:string='src/assets/data/data.Json';
  
  constructor(private http:HttpClient) { }


  obtenerDatos (): Observable<any> {
  return this.http.get<any>(this.url+"persona"); 
  }


}
