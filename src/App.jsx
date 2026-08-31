import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";

import React, { useState } from 'react';
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner"

const Appliaction = styled.div`
width: 65%;
margin: 0 auto;
text-align: center;
min-height: 100%;

`;
const Main = styled.main`
background-color: #fffffff1;
padding: 2rem;
min-height: 100%;
`;
function App() {
  const [resultado, setResultado] = useState({});
  const actualizarCotizacion = (cotizacion) => {
    setResultado(cotizacion);
  }
  const [cargando, setCargando] = useState(false);

  const { precioFinal } = resultado;
  return (
    <>
      <Appliaction>
        <Header titulo={"Cotizador de seguros automóviles"} />
        <Main>
          <Formulario actualizarCotizacion={actualizarCotizacion} setCargando={setCargando} />

          {cargando ? <Spinner /> : null}

          {Object.keys(resultado).length > 0 && !cargando ? <Resumen resultado={resultado} /> : null}
          {Object.keys(resultado).length > 0 && !cargando ? <Resultado precioFinal={precioFinal} /> : null}
        </Main>
      </Appliaction>

    </>
  );
}

export default App;
