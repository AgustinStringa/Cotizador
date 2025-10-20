import type { TipoPlan } from "@helpers/formulario-helper.ts";

export interface Cotizacion {
  marca?: string;
  anio?: number;
  tipoPlan?: TipoPlan;
  precioFinal?: number;
}
