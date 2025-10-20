import HeaderComponent from "./components/header/Header";
import styled from "@emotion/styled";
import FormularioComponent from "@components/formulario/Formulario";
import ResumenComponent from "@components/resumen/Resumen";
import { useState } from 'react';
import ResultadoComponent from "@components/resultado/Resultado";
import SpinnerComponent from "@components/spinner/Spinner"
import type { Resultado } from "@core/resultado.ts";
import type { Cotizacion } from "@core/cotizacion.ts";

const Appliaction = styled.div`
width: 65%;
margin: 0 auto;
text-align: center;
min-height: 100vh;
`;
const Main = styled.main`
background-color: #fffffff1;
padding: 2rem;
min-height: 100%;
`;

function App() {
  const initialResultado: Resultado = {};

  const [resultado, setResultado] = useState(initialResultado);
  const actualizarCotizacion = (cotizacion: Cotizacion) => {
    setResultado(cotizacion);
  }
  const [cargando, setCargando] = useState(false);

  const { precioFinal } = resultado;
  return (
    <>
      <Appliaction>
        <HeaderComponent titulo={"Cotizador de seguros automóviles"} />
        <Main>
          <FormularioComponent actualizarCotizacion={actualizarCotizacion} setCargando={setCargando} />

          {cargando ? <SpinnerComponent /> : null}

          {Object.keys(resultado).length > 0 && !cargando ? <ResumenComponent cotizacion={resultado} /> : null}
          {Object.keys(resultado).length > 0 && !cargando ? <ResultadoComponent precioFinal={precioFinal} /> : null}
        </Main>
      </Appliaction>

    </>
  );
}

export default App;
