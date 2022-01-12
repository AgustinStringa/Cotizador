/**
 * 
 * @param {anio al cual calcular diferencia con el año actual} anio 
 * @returns 
 */
export function obtenerDiferenciaAnios(anio) {
    return (new Date().getFullYear() - anio);
}
/**
 * 
 * @param {marca para efectuar aumento} marca 
 * @param {precio al momento} precio 
 * @returns precioAumentado
 */
export function getAumentoMarca(marca, precio) {
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
 * @param {*completo, basico} tipoPlan 
 * @param {*precio al momento} precio 
 * @returns precio aumentado
 */
export function getAumentoTipoPlan(tipoPlan, precio) {
    if (tipoPlan === "completo") {
        precio = (150 * precio) / 100;
    }
    if (tipoPlan === "basico") {
        precio = (120 * precio) / 100;
    }
    return precio;
}