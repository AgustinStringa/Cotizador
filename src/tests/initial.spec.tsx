import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import App from "@/App.tsx";
import HeaderComponent from "@components/header/Header.tsx";

describe("Initial test:", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render App component", () => {
    render(<App />);
  });

  it("should render header title from App", () => {
    render(<App />);
    expect(
      screen.getByText(/Cotizador de seguros automóviles/i)
    );
  });

  it("can render Header standalone with prop", () => {
    render(<HeaderComponent titulo="Cotizador de seguros automóviles" />);
    expect(
      screen.getByText(/Cotizador de seguros automóviles/i)
    );
  });
});
