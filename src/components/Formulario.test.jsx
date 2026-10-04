import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Formulario from "./Formulario";

describe("Formulario (Cotizador)", () => {
  const actualizarCotizacionMock = vi.fn();
  const setCargandoMock = vi.fn();
  const limpiarCotizacionMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve([]),
    });
  });

  it("renderiza el select de años con opciones desde el año actual hasta el 2000 en orden descendente", () => {
    render(
      <Formulario
        actualizarCotizacion={actualizarCotizacionMock}
        setCargando={setCargandoMock}
        hayCotizacion={false}
        limpiarCotizacion={limpiarCotizacionMock}
      />
    );

    const selectAnio = screen.getByLabelText(/Año \*/i);
    expect(selectAnio).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    const options = Array.from(selectAnio.querySelectorAll("option"))
      .map((opt) => opt.value)
      .filter((val) => val !== "--Seleccione--");

    expect(options[0]).toBe(String(currentYear));
    expect(options[options.length - 1]).toBe("2000");
    expect(options.length).toBe(currentYear - 2000 + 1);
  });
});
