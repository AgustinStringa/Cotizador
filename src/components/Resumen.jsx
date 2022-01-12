import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { primerMayuscula } from "../helpers/resumen-helper";

const WrapResultado = styled.div`
  background-color: #027685;
  padding: 1rem;
  color: #ffffff;
  width: 100%;
  transition: all 0.3s ease;
  font-weight: light;
  font-size: 1.1rem;

  & > ul {
    li {
      margin: 1rem;
    }
  }
`;

const SpanResultado = styled.span`
  text-decoration: underline;
`;
const Resumen = ({ resultado: { anio, marca, tipoPlan } }) => {
  return (
    <WrapResultado>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>
          Marca: <SpanResultado>{marca}</SpanResultado>
        </li>
        <li>
          Plan: <SpanResultado>{primerMayuscula(tipoPlan)}</SpanResultado>
        </li>
        <li>
          Año del auto: <SpanResultado>{anio}</SpanResultado>
        </li>
      </ul>
    </WrapResultado>
  );
};

/**
 * el objeto resultado es el state general de la App una vez "pasado" por el formulario
 * anio: anio del auto
 * marca: europeo, asiatico, americano
 * tipoPlan: basico, completo
 */
Resumen.propTypes = {
  resultado: {
    anio: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    tipoPlan: PropTypes.string.isRequired,
  },
};

export default Resumen;
