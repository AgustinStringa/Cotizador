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
export function getAumentoPorMarca(marca, precio) {
    const expensivesBrands = ["ALFA ROMEO", "JEEP", "AUDI", "BMW", "RAM", "FERARI", "PORSCHE", "MINI COOPER", "MERCEDES BENZ", "MCLAREN", "MASERATI"];

    if (expensivesBrands.includes(marca)) {
        precio *= 1.7
    }
    return precio *= 1.3;
}
/**
 * 
 * @param {*completo, basico} tipoPlan 
 * @param {*precio al momento} precio 
 * @returns precio aumentado
 */
export function getAumentoPorTipoPlan(tipoPlan, precio) {
    if (tipoPlan === "completo") {
        precio = (150 * precio) / 100;
    }
    if (tipoPlan === "basico") {
        precio = (120 * precio) / 100;
    }
    return precio;
}