import { Component } from '@angular/core';
import { TutoresService } from 'src/app/services/tutores.service';
import { Tutor, Materia } from 'src/app/interfaces/interfaces';

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
    link: null,
    comentarios: null
  };

  materias: Materia[];

  constructor( private tutorServices : TutoresService) { 
    this.tutorServices.obtenerMaterias()
                    .subscribe( resp => {                  
                    this.materias = resp.materias;
                    console.log('Materias registradas', this.materias);
      });
  }

  registrar() {
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

   console.log('Comentarios', materiasText);

   this.tutor.comentarios = this.tutor.comentarios + materiasText;
                                  
    /*this.tutorServices.registrarTutor(this.tutor.nombre, this.tutor.apellido, this.tutor.direccion, this.tutor.correo, this.tutor.telefono, this.tutor.link)
                    .subscribe( resp => {
                    console.log('Registro tutor', resp);
      });*/
  }
}
