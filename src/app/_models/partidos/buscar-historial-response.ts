import { baseResponse } from "../compartidos/baseResponse";
import { ResumenPartido } from "./resumenPartido";

export interface BuscarHistorialResponse extends baseResponse{
    totalPartidos: number;
    equipo1: string;
    ganadosEquipo1: number;
    empatados: number;
    equipo2: string;
    ganadosEquipo2: number;
    partidos: ResumenPartido[];
}
