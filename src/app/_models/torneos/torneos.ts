import { torneo } from "./torneo";

export interface Torneos {
    NumeroPagina : number,
    CantidadPagina : number,
    CantidadTotal : number,
    Elementos : torneo[],
}
