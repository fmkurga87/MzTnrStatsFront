import { ResumenPartido } from "../partidos/resumenPartido";
import { EquipoGrupo } from "./equipoGrupo";

export interface Grupo {
    partidosDelGrupo: ResumenPartido[];
    grupo: string;
    equiposGrupo: EquipoGrupo[];
  }
