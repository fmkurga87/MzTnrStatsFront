import { baseResponse } from "../compartidos/baseResponse";
import { ResumenPartido } from "./resumenPartido";

export interface BuscarHistorialResponse extends baseResponse{
    totalPartidos: number;
    ganadosEquipo1: number;
    empatados: number;
    ganadosEquipo2: number;
    partidos: ResumenPartido[];
}
