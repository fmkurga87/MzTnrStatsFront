import { EliminatoriasCopa } from "./eliminatoriasCopa";
import { Grupo } from "./grupo";

export interface DatosCopa {
    grupos: Grupo[];
    playoff: EliminatoriasCopa[];
}
