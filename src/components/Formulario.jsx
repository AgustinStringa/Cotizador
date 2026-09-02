import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  obtenerDiferenciaAnios,
  getAumentoPorMarca,
  getAumentoPorTipoPlan,
} from "../helpers/formulario-helper";
import PropTypes from "prop-types";

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Campo = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-basis: 50%;
  flex-grow: 1;
  flex-direction: row;
  column-gap: 0.5rem;
  align-items: center;
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
  color: #333;
  font-weight: bold;
  -webkit-appearance: none;
  appearance: none;
`;

const ContenedorRadio = styled.div`
  flex-basis: 50%;
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
  }
`;

const LabelRadio = styled.label`
  flex-basis: calc(35% - 1rem);
`;
const InputSubmit = styled.input`
  background-color: var(--primary-color);
  padding: 1rem;
  border: none;
  outline: none;
  display: block;
  margin-left: auto;
  color: #ffffff;
  width: 120px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    box-shadow: 2px 2px 1px gray;
  }
`;
const InputLimpiar = styled.button`
  background-color: #6c757d;
  padding: 1rem;
  border: none;
  outline: none;
  display: block;
  margin-left: 0.5rem;
  color: #ffffff;
  width: 120px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 1.1rem;
  &:hover {
    box-shadow: 2px 2px 1px gray;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
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

const Formulario = ({
  actualizarCotizacion,
  setCargando,
  hayCotizacion,
  limpiarCotizacion,
}) => {
  const [formData, setFormData] = useState({
    marca: "",
    anio: "",
    tipoPlan: "",
  });

  const [error, setError] = useState(false);
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const cargarMarcas = async () => {
      try {
        const response = await fetch("/marcas.json");
        const dataMarcas = await response.json();
        const orderedMarcas = dataMarcas.sort((a, b) =>
          a.Descripcion.localeCompare(b.Descripcion),
        );
        setMarcas(orderedMarcas);
      } catch (err) {
        setMarcas([]);
      }
    };
    cargarMarcas();
  }, []);

  const { marca, anio, tipoPlan } = formData;
  const handleInputChange = (e) => {
    const nuevoState = formData;
    nuevoState[`${e.target.name}`] = `${e.target.value}`;
    setFormData({ ...nuevoState });
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
    precio = getAumentoPorMarca(marca, precio);

    const diferenciaAnio = obtenerDiferenciaAnios(anio);
    if (diferenciaAnio) {
      const nuevoPorcentaje = 100 - diferenciaAnio * 3;
      precio = (nuevoPorcentaje * precio) / 100;
    }
    precio = getAumentoPorTipoPlan(tipoPlan, precio);
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

  const handleLimpiar = () => {
    setFormData({
      marca: "",
      anio: "",
      tipoPlan: "",
    });
    setError(false);
    limpiarCotizacion();
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
          <Label htmlFor="marca">Marca *</Label>
          <Select
            name="marca"
            id="marca"
            onChange={handleInputChange}
            required
            value={!marca ? "0" : marca}
          >
            <Option value="0" disabled>
              -- Seleccione --
            </Option>
            {marcas.map((marcaItem) => (
              <Option key={marcaItem.Id} value={marcaItem.Descripcion}>
                {marcaItem.Descripcion}
              </Option>
            ))}
          </Select>
        </Campo>

        <Campo>
          <Label htmlFor="anio">Año *</Label>
          <Select
            name="anio"
            id="anio"
            onChange={handleInputChange}
            required
            value={!anio ? "--Seleccione--" : anio}
          >
            <Option value="--Seleccione--" disabled>
              -- Seleccione --
            </Option>
            {yearsArray.map((year) => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
        </Campo>

        <Campo>
          <Label htmlFor="">Plan *</Label>
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

        <InputContainer>
          <InputSubmit type="submit" value="Cotizar" />
          {hayCotizacion ? (
            <InputLimpiar type="button" onClick={handleLimpiar}>
              Limpiar
            </InputLimpiar>
          ) : null}
        </InputContainer>
      </FormStyle>
    </>
  );
};

/**
 * actualizarCotizacion: funcion que actualiza el state general de la App. Se crea para no pasar directamente setCotizacion y "ejecutar la misma solo desde la app"
 * setCargando: funcion que cambia el valor del state cargando, encargado de la visibilidad del spinner de carga
 * hayCotizacion: booleano que indica si hay una cotización activa en la aplicación
 * limpiarCotizacion: funcion que limpia el estado de resultado en la App
 */
Formulario.propTypes = {
  actualizarCotizacion: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired,
  hayCotizacion: PropTypes.bool.isRequired,
  limpiarCotizacion: PropTypes.func.isRequired,
};
export default Formulario;
