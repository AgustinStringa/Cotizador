import { describe, it, expect } from "vitest";
import { obtenerDiferenciaAnios } from "./formulario-helper";

describe("formulario-helper (Cotizador)", () => {
  it("calcula correctamente la diferencia entre el año actual y el año provisto", () => {
    const currentYear = new Date().getFullYear();
    expect(obtenerDiferenciaAnios(currentYear)).toBe(0);
    expect(obtenerDiferenciaAnios(currentYear - 5)).toBe(5);
    expect(obtenerDiferenciaAnios(2000)).toBe(currentYear - 2000);
  });
});
