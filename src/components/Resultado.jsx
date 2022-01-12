import React from "react";
import styled from "@emotion/styled";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

const ContenedorMessage = styled.div`
  background-color: #26c6da;
  padding: 20px;
  font-weight: bold;
  margin: 1rem 0 1rem 0;
  color: #333333;
`;

const ContenedorCotizacion = styled.div`
  margin: 1rem 0;
  text-align: center;
  padding: 0.5rem;
  background-color: rgb(127, 224, 237);
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const Resultado = ({ precioFinal }) => {
  if (precioFinal) {
    return (
      <ContenedorCotizacion>
        {/* <TransitionGroup component="div" className="resultado">
          <CSSTransition
            classNames="resultado"
            key={precioFinal}
            timeout={{ enter: 1500, exit: 1500 }}
          >
            <TextoCotizacion>El precio es: ${precioFinal}</TextoCotizacion>
          </CSSTransition>
        </TransitionGroup> */}
        <TextoCotizacion>El precio es: ${precioFinal}</TextoCotizacion>
      </ContenedorCotizacion>
    );
  } else {
    return (
      <ContenedorMessage>
        <p>Elige marca, año y tipo de plan de seguros.</p>
      </ContenedorMessage>
    );
  }
};

export default Resultado;
