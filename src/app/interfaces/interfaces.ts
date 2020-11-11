export interface RespGetMaterias {
    error: boolean;
    materias: Materia[];
}

export interface Materia {
    idMateria: string;
    nivel: string;
    nombreMateria: string;
    checked: boolean;
}

export interface Tutor {
    nombre: string;
    apellido: string;
    telefono: number;
    correo: string;
    direccion: string;
    latitud: string;
    longitud: string;
    comentarios: string;
  }

export interface Contacto {
    nombre: string;
    correo: string;
    comentarios: string;
}
  