import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { capitalize } from "@helpers/resumen-helper";
import type { Resultado } from "@core/resultado.ts";
import type { Cotizacion } from "@core/cotizacion.ts";

const WrapResultado = styled.div`
  background-color: #6D9DC5;
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
const ResumenComponent = ({ cotizacion: { anio, marca, tipoPlan } }: { cotizacion: Cotizacion }) => {
  return (
    <WrapResultado>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>
          Marca: <SpanResultado>{marca}</SpanResultado>
        </li>
        <li>
          Plan: <SpanResultado>{tipoPlan && capitalize(tipoPlan)}</SpanResultado>
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
ResumenComponent.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default ResumenComponent;
