import { BaseResponseWithFound } from "../compartidos/baseResponseWithFound";
import { EquipoCompleto } from "./equipoCompleto";

export interface BuscarEquiposResponse extends BaseResponseWithFound{
    equipo: EquipoCompleto;
}