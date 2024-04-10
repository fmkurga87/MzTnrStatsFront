import { BaseResponseWithFound } from "../compartidos/baseResponseWithFound";
import { EquipoCompleto } from "./equipoCompleto";

export interface ObtenerEquipoResponse extends BaseResponseWithFound{
    equipo: EquipoCompleto;
}