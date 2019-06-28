export interface RespGetMaterias {
    error: boolean;
    materias: Materia[];
}

export interface Materia {
    idMateria: number;
    nombreMateria: string;
    checked: boolean;
}

export interface Tutor {
    nombre: string;
    apellido: string;
    telefono: number;
    correo: string;
    direccion: string;
    link: string;
    comentarios: string;
  }
  