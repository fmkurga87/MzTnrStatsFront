import { BaseResponseWithFound } from "../compartidos/baseResponseWithFound";
import { DatosCopa } from "./datosCopa";
import { DatosLA } from "./datosLA";
import { TorneoCompleto } from "./torneoCompleto";

export interface ObtenerTorneoResponse extends BaseResponseWithFound{
    "torneo" : TorneoCompleto,
}
