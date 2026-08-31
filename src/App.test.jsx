import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App's Title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Cotizador de seguros automóviles/i);
  expect(linkElement).toBeInTheDocument();
});
