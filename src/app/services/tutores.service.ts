import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespGetMaterias } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TutoresService {

  constructor(private http: HttpClient) { 
    console.log("Servicio de turores iniciado");
  }

  registrarTutor(nombre: string, apellido: string, direccion: string, correo: string, telefono: number, latitud: string, longitud: string, comentarios: string){

    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });

    console.log("Latitud",latitud);
   console.log("Longitud",longitud);

    const data = {
      nombre: nombre, 
      direccion: direccion,
      correo: correo,
      telefono: telefono,
      latitud: latitud,
      longitud: longitud,
      comentarios: comentarios,
    };

    console.log("Latitud",data.latitud);
   console.log("Longitud",data.longitud);

    return this.http.post<any>('http://localhost:8080/tutores/index.php/TutorService/RegistrarTutor/', data, { headers });
  }

  obtenerMaterias(){
    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });

    return this.http.get<RespGetMaterias>('http://localhost:8080/tutores/index.php/TutorService/ObtenerMaterias/', { headers });
  }

  registrarComentario(nombre: string, correo: string, comentarios: string){

    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });

    const data = {
      nombre: nombre, 
      correo: correo,
      comentarios: comentarios,
    };

    return this.http.post<any>('http://localhost:8080/tutores/index.php/TutorService/RegistrarComentario/', data, { headers });
  }


}
