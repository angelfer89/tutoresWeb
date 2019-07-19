import { Component } from '@angular/core';
import { TutoresService } from 'src/app/services/tutores.service';
import { Tutor, Materia } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';

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
  materiasPrimaria: Materia[];
  materiasSecundaria: Materia[];
  materiasBachillerato: Materia[];
  materiasUniversidad: Materia[];

  constructor( private tutorServices : TutoresService) { 
    
    this.tutorServices.obtenerMaterias()
                    .subscribe( resp => {                  
                    this.materias = resp.materias;

                    this.materiasPrimaria = this.materias.filter( materia => {
                      return materia.nivel == "Primaria";
                    });

                    this.materiasSecundaria = this.materias.filter( materia => {
                      return materia.nivel == "Secundaria";
                    });

                    this.materiasBachillerato= this.materias.filter( materia => {
                      return materia.nivel == "Bachillerato";
                    });

                    this.materiasUniversidad = this.materias.filter( materia => {
                      return materia.nivel == "Universidad";
                    });
             }); 
  }

  registrar(forma: NgForm) {

    if(!forma.valid) {
      return;
    }

    const materiasSeleccionadas = this.materias
                                  .filter ( materia => {
                                    return materia.checked;
                                  });
                                  
   let materiasText = "";

   materiasSeleccionadas.forEach(element => {
     materiasText = materiasText + " - " + element.idMateria + ". " + element.nombreMateria ;
   });

   let comentarios = this.tutor.comentarios + materiasText;
                                  
    this.tutorServices.registrarTutor(this.tutor.nombre, this.tutor.apellido, this.tutor.direccion, this.tutor.correo, this.tutor.telefono, this.tutor.latitud, this.tutor.longitud, comentarios)
                    .subscribe( resp => {
                    this.respServicio = resp;
                    console.log("Resp servicio",this.respServicio);
                    if(resp.codeError)
                    {
                      if(resp.codeError == 1062){ // Este error es cuando ya eiste el registro
                        $("#registroDuplicado").modal('show');
                      } 
                      else{
                        $("#errorInesperado").modal('show');
                      }    
                    }
                    else{
                      $("#registroExitoso").modal('show');
                    }
      });
  }
}
