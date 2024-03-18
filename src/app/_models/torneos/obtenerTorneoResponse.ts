import { BaseResponseWithFound } from "../compartidos/baseResponseWithFound";
import { DatosCopa } from "./datosCopa";
import { DatosLA } from "./datosLA";

export interface ObtenerTorneoResponse extends BaseResponseWithFound{
    "IdMz" : number,
    "Nombre" : string,
    "Edicion" : number,
    "TemporadaMZ" : number,
    "FechaInicio" : Date,
    "FechaFin" : Date,
    "Link" : string,
    "IdCampeon" : number,
    "UrlImagen" : string,
    "Tipo" : number,
    "datosLA" : DatosLA,
    "datosCopa" : DatosCopa
}
