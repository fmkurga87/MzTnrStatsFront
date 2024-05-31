export interface EquipoGrupo {
    torneoId: number;
    equipoId: number;
    nombreEquipo: string | null;
    posicion: number | null;
    puntos: number;
    partidosJugados: number;
    partidosGanados: number;
    partidosEmpatados: number;
    partidosPerdidos: number;
    golesAFavor: number;
    golesEnContra: number;
    diferenciaGol: number;
  }