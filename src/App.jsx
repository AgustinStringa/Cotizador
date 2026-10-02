import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";

import React, { useState } from "react";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import { Spinner, Header as SharedHeader, Footer as SharedFooter } from "../shared";

const Application = styled.div`
  width: 100%;
  text-align: center;
  min-height: 100%;
`;
const Main = styled.main`
  background-color: #fffffff1;
  padding: 1rem 1.5rem;
  max-width: 90%;
  margin: 1rem auto;
  border-radius: 2rem;
  min-height: 100%;
`;
function App() {
  const [resultado, setResultado] = useState({});
  const actualizarCotizacion = (cotizacion) => {
    setResultado(cotizacion);
  };
  const limpiarCotizacion = () => {
    setResultado({});
  };
  const [cargando, setCargando] = useState(false);
  const title = "Cotizador de seguros automóviles";

  const { precioFinal } = resultado;
  const hayCotizacion = Object.keys(resultado).length > 0 && !cargando;
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <SharedHeader title={title} variant="slate" />
      <Application style={{ flex: 1 }}>
        <Main>
          <Formulario
            actualizarCotizacion={actualizarCotizacion}
            setCargando={setCargando}
            hayCotizacion={hayCotizacion}
            limpiarCotizacion={limpiarCotizacion}
          />

          {cargando ? <Spinner variant="chase" text="Calculando cotización..." /> : null}

          {Object.keys(resultado).length > 0 && !cargando ? (
            <Resumen resultado={resultado} />
          ) : null}
          {Object.keys(resultado).length > 0 && !cargando ? (
            <Resultado precioFinal={precioFinal} />
          ) : null}
        </Main>
      </Application>
      <SharedFooter
        title="Cotizador de Seguros"
        description="Calcula la cotización del seguro de tu vehículo en tiempo real."
        variant="slate"
      />
    </div>
  );
}

export default App;
