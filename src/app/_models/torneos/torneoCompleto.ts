import { DatosCopa } from "./datosCopa";
import { DatosLA } from "./datosLA";

export interface TorneoCompleto {
    "idMz" : number,
    "nombre" : string,
    "edicion" : number,
    "temporadaMZ" : number,
    "fechaInicio" : Date,
    "fechaFin" : Date,
    "link" : string,
    "idCampeon" : number,
    "urlImagen" : string,
    "tipo" : number,
    "datosLA" : DatosLA[],
    "datosCopa" : DatosCopa
}
