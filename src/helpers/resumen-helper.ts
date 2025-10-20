/**
 *
 * @param text string, cadena a convertir su primera letra en mayus
 * @returns text=agustin => Agustin
 */
export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
