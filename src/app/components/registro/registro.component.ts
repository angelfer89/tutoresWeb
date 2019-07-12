import { Component } from '@angular/core';
import { TutoresService } from 'src/app/services/tutores.service';
import { Tutor, Materia } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

declare var $: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent{

  tutor: Tutor = {
    nombre: null,
    apellido: null,
    telefono: null,
    correo: null,
    direccion: null,
    latitud: null,
    longitud: null,
    comentarios: null
  };

  respServicio:any = null;

  materias: Materia[];

  constructor( private tutorServices : TutoresService) { 
    this.tutorServices.obtenerMaterias()
                    .subscribe( resp => {                  
                    this.materias = resp.materias;
                    console.log('Materias registradas', this.materias);
      });
  }

  registrar(forma: NgForm) {

    if(!forma.valid) {
      return;
    }
    
    console.log("Iniciando el registro del usuario");

    const materiasSeleccionadas = this.materias
                                  .filter ( materia => {
                                    return materia.checked;
                                  });

    
   console.log('Materias seleccionadas: ', materiasSeleccionadas);
                                  
   let materiasText = "";

   materiasSeleccionadas.forEach(element => {
     materiasText = materiasText + " - " + element.idMateria + ". " + element.nombreMateria ;
   });

   let comentarios = this.tutor.comentarios + materiasText;

   console.log('Comentarios', comentarios);
                                  
    this.tutorServices.registrarTutor(this.tutor.nombre, this.tutor.apellido, this.tutor.direccion, this.tutor.correo, this.tutor.telefono, this.tutor.latitud, this.tutor.longitud, comentarios)
                    .subscribe( resp => {
                    this.respServicio = resp;
                    console.log("Resp servicio",this.respServicio);
                    if(resp.codeError)
                    {
                      console.error("Ocurrió un error desconocido");
                      if(resp.codeError == 1062){
                        $("#videoObtenerMapa").modal('show');
                      }     
                    }
                    else{
                      $("#videoObtenerMapa").modal('show');
                    }
      });
  }
}
