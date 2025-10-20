/**
 *
 * @param anio año al cual calcular diferencia con el año actual
 * @returns
 */
export function obtenerDiferenciaAnios(anio: number) {
  return new Date().getFullYear() - anio;
}

export function getDescuentoByAnio(anio: number, precio: number): number {
  const diferenciaAnio = obtenerDiferenciaAnios(Number(anio));
  if (diferenciaAnio) {
    const nuevoPorcentaje = 100 - diferenciaAnio * 3;
    precio = (nuevoPorcentaje * precio) / 100;
  }
  return precio;
}

/**
 *
 * @param marca marca para efectuar aumento
 * @param precio precio al momento
 * @returns precioAumentado
 */
export function getAumentoByMarca(marca: string, precio: number): number {
  if (marca === "Europeo") {
    precio = precio + (30 * precio) / 100;
  }
  if (marca === "Americano") {
    precio = precio + (15 * precio) / 100;
  }
  if (marca === "Asiatico") {
    precio = precio + (5 * precio) / 100;
  }
  return precio;
}

/**
 *
 * @param tipoPlan string 'completo','basico'
 * @param precio number precio al momento
 * @returns
 */
export function getAumentoByTipoPlan(tipoPlan: TipoPlan, precio: number) {
  if (tipoPlan === "completo") {
    precio = (150 * precio) / 100;
  }
  if (tipoPlan === "basico") {
    precio = (120 * precio) / 100;
  }
  return precio;
}
export enum TipoPlan {
  BASICO = "basico",
  COMPLETO = "completo",
}
