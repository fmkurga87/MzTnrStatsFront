import { ResumenPartido } from "../partidos/resumenPartido";

export interface EquipoCompleto {
    nombre: string;
    apellido: string;
    ciudad: string;
    provincia: string;
    urlEscudo: string;
    partidosJugados: ResumenPartido[];
    partidosProximos: ResumenPartido[];
    idMz: number;
    nombreEquipo: string;
    usuarioMZ: string;
}
