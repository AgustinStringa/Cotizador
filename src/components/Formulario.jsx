import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  obtenerDiferenciaAnios,
  getAumentoMarca,
  getAumentoTipoPlan,
} from "../helpers/formulario-helper";
import PropTypes from "prop-types";

const FormStyle = styled.form`
  width: 100%;
  margin: 1rem 0;
`;

const Campo = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Select = styled.select`
  flex-basis: 75%;
  flex-grow: 0;
  padding: 0.5rem;
  background-color: #eee;
  border-radius: 5px;
  border: 2px solid #ddd;
`;

const Option = styled.option`
  padding: 1rem;
  background-color: #eee;
`;

const Label = styled.label`
  margin: 0 5rem 0 1rem;
  color: #333;
  -webkit-appearance: none;
`;

const ContenedorRadio = styled.div`
  flex-basis: 75%;
  flex-grow: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 769px) {
    flex-direction: column;
  }
  & > label {
    text-align: left;
    margin: 1rem 0;
  }
`;

const LabelRadio = styled.label`
  flex-basis: calc(35% - 1rem);
`;
const InputSubmit = styled.input`
  background-color: #027685;
  padding: 1rem;
  border: none;
  outline: none;
  color: #ffffff;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: light;
  letter-spacing: 1px;
  font-size: 1.1rem;
  &:hover {
    background-color: #0293a6;
    box-shadow: 2px 2px 1px gray;
  }
`;

const Error = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 2rem;
  margin: 1rem 0;
`;
var yearsArray = [];
for (let i = new Date().getFullYear(); i >= 2000; i--) {
  yearsArray.push(i);
}

const Formulario = ({ actualizarCotizacion, setCargando }) => {
  const [data, setData] = useState({
    marca: "",
    anio: "",
    tipoPlan: "",
  });

  const [error, setError] = useState(false);

  const { marca, anio, tipoPlan } = data;
  const handleInputChange = (e) => {
    const nuevoState = data;
    nuevoState[`${e.target.name}`] = `${e.target.value}`;
    setData({ ...nuevoState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!marca.trim() || !anio.trim() || !tipoPlan.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setCargando(true);

    const precioBase = 2000;
    var precio = precioBase;
    precio = getAumentoMarca(marca, precio);

    const diferenciaAnio = obtenerDiferenciaAnios(anio);
    if (diferenciaAnio) {
      const nuevoPorcentaje = 100 - diferenciaAnio * 3;
      precio = (nuevoPorcentaje * precio) / 100;
    }
    precio = getAumentoTipoPlan(tipoPlan, precio);
    precio = parseFloat(precio).toFixed(2);

    setTimeout(() => {
      setCargando(false);
      actualizarCotizacion({
        marca: marca,
        anio: anio,
        tipoPlan: tipoPlan,
        precioFinal: parseFloat(precio).toFixed(2),
      });
    }, 2000);
  };
  return (
    <>
      {error ? (
        <Error>
          Completa correctamente el formulario. Todos los campos son
          obligatorios.
        </Error>
      ) : null}
      <FormStyle onSubmit={handleSubmit}>
        <Campo>
          <Label htmlFor="marca">Marca </Label>
          <Select
            name="marca"
            id="marca"
            onChange={handleInputChange}
            required
            value={!marca ? "--Seleccione--" : marca}
          >
            <Option value="--Seleccione--" disabled>
              --Seleccione--
            </Option>
            <Option value="Americano">Americano</Option>
            <Option value="Asiatico">Asiático</Option>
            <Option value="Europeo">Europeo</Option>
          </Select>
        </Campo>

        <Campo>
          <Label htmlFor="anio">Año </Label>
          <Select
            name="anio"
            id="anio"
            onChange={handleInputChange}
            required
            value={!anio ? "--Seleccione--" : anio}
          >
            <Option value="--Seleccione--" disabled>
              --Seleccione--
            </Option>
            {yearsArray.map((year) => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
        </Campo>

        <Campo>
          <Label htmlFor="">Plan </Label>
          <ContenedorRadio>
            <LabelRadio htmlFor="tipo-basico">
              <input
                type="radio"
                name="tipoPlan"
                id="tipo-basico"
                value={"basico"}
                onChange={handleInputChange}
                required
                checked={tipoPlan === "basico"}
              />{" "}
              Básico
            </LabelRadio>
            <LabelRadio htmlFor="tipo-completo">
              <input
                type="radio"
                name="tipoPlan"
                id="tipo-completo"
                value={"completo"}
                onChange={handleInputChange}
                required
                checked={tipoPlan === "completo"}
              />{" "}
              Completo
            </LabelRadio>
          </ContenedorRadio>
        </Campo>

        <InputSubmit type="submit" value="COTIZAR" />
      </FormStyle>
    </>
  );
};

/**
 * actualizarCotizacion: funcion que actualiza el state general de la App. Se crea para no pasar directamente setCotizacion y "ejecutar la misma solo desde la app"
 * setCargando: funcion que cambia el valor del state cargando, encargado de la visibilidad del spinner de carga
 */
Formulario.propTypes = {
  actualizarCotizacion: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired,
};
export default Formulario;
