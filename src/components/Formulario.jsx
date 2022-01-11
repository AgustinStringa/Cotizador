import React from "react";
import styled from "@emotion/styled";

const FormStyle = styled.form`
  width: 100%;
`;

const Campo = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Select = styled.select`
  flex-basis: 75%;
  flex-grow: 0;
  padding: 0.5rem;
`;

const Label = styled.label`
  margin: 0 5rem 0 1rem;
`;

const ContenedorRadio = styled.div`
  flex-basis: 75%;
  flex-grow: 0;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
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
var yearsArray = [];
for (let i = 2000; i <= 2022; i++) {
  yearsArray.push(i);
}
console.log(yearsArray);
const Formulario = () => {
  return (
    <FormStyle>
      <Campo>
        <Label htmlFor="">Marca </Label>
        <Select name="" id="" defaultValue={"--Seleccione--"}>
          <option value="--Seleccione--" disabled>
            --Seleccione--
          </option>
          <option value="Americano">Americano</option>
          <option value="Asiático">Asiático</option>
          <option value="Europeo">Europeo</option>
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="">Año </Label>
        <Select name="" id="" defaultValue={"--Seleccione--"}>
          <option value="--Seleccione--" disabled>
            --Seleccione--
          </option>
          {yearsArray.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </Select>
      </Campo>

      <Campo>
        <Label htmlFor="">Plan </Label>
        <ContenedorRadio>
          <LabelRadio htmlFor="">
            <input type="radio" name="plan" id="" value={"basico"} /> Básico
          </LabelRadio>
          <LabelRadio htmlFor="">
            <input type="radio" name="plan" id="" value={"completo"} /> Completo
          </LabelRadio>
        </ContenedorRadio>
      </Campo>

      <InputSubmit type="submit" value="COTIZAR" />
    </FormStyle>
  );
};

export default Formulario;
