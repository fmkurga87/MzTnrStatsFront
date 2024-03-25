import { paginatedSearchResult } from "../compartidos/paginatedSearchResult";
import { Equipos } from "./equipos";

export interface BuscarEquiposResponse extends paginatedSearchResult{
    elementos: Equipos[],
}
