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

  registrarTutor(nombre: string, apellido: string, direccion: string, correo: string, telefono: number, link: string, comentarios: string){

    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });

    const data = {
      nombre: nombre, 
      direccion: direccion,
      correo: correo,
      telefono: telefono,
      link: link,
      comentarios: comentarios,
    };

    return this.http.post<any>('http://localhost:8080/tutores/index.php/TutorService/RegistrarTutor/', data, { headers });
  }

  obtenerMaterias(){
    const headers = new HttpHeaders({
      'X-API-KEY' : '12345'
    });

    return this.http.get<RespGetMaterias>('http://localhost:8080/tutores/index.php/TutorService/ObtenerMaterias/', { headers });
  }


}
