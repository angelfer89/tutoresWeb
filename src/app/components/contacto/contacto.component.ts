import { Component, OnInit } from '@angular/core';
import { TutoresService } from 'src/app/services/tutores.service';
import { Contacto } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: Contacto = {
    nombre: null,
    correo: null,
    comentarios: null
  };

  respServicio:any = null;

  constructor(private tutorServices : TutoresService) { }

  ngOnInit() {
  }

  registrarComentario(formContacto: NgForm) {

    if(!formContacto.valid) {
      return;
    }
                                                         
    this.tutorServices.registrarComentario(this.contacto.nombre, this.contacto.correo , this.contacto.comentarios)
                    .subscribe( resp => {
                    this.respServicio = resp;
                    console.log("Resp servicio",this.respServicio);
                    if(resp.codeError)
                    {
                      $("#errorInesperado").modal('show');
                    }
                    else{
                      $("#registroExitoso").modal('show');
                    }
      });
  }

}
