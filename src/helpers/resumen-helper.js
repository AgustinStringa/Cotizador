/**
 * 
 * @param {cadena a convertir su primera letra en mayus} text 
 * @returns text=agustin => Agustin
 */
export function primerMayuscula(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}