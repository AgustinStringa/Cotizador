# Cotizador de seguros automóviles

Aplicación web desarrollada con React y Vite para simular la cotización de un seguro automotor en función de la marca del vehículo, el año del auto y el tipo de plan elegido.

## Descripción

La app permite completar un formulario con:

- Marca del auto: Americano, Asiático o Europeo
- Año del vehículo
- Tipo de cobertura: Básica o Completa

Una vez enviado el formulario, la aplicación valida que todos los campos estén completos, muestra un spinner durante la carga y luego presenta un resumen con los datos seleccionados y el precio final estimado.

## Funcionalidad principal

La cotización se calcula sobre una base inicial de 2000 y luego aplica varios factores:

- Ajuste por marca:
  - Americano: +15%
  - Asiático: +5%
  - Europeo: +30%
- Ajuste por antigüedad del vehículo:
  - Se calcula la diferencia entre el año actual y el año del auto
  - Se descuenta un 3% por cada año de diferencia
- Ajuste por tipo de plan:
  - Básico: +20%
  - Completo: +50%

La lógica del cálculo se encuentra en los helpers del proyecto y se procesa desde el componente principal de la aplicación.

## Stack tecnológico

- React 17
- Vite
- Emotion (styled-components style API)
- Vitest + Testing Library
- PropTypes

## Estructura del proyecto

```text
Cotizador/
├── public/
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── components/
│   │   ├── Formulario.jsx
│   │   ├── Header.jsx
│   │   ├── Resumen.jsx
│   │   ├── Resultado.jsx
│   │   ├── Spinner.jsx
│   │   └── Spinner.css
│   ├── helpers/
│   │   ├── formulario-helper.js
│   │   └── resumen-helper.js
│   ├── App.jsx
│   ├── App.test.jsx
│   ├── index.css
│   ├── index.jsx
│   ├── reportWebVitals.js
│   └── setupTests.js
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── public/
```

## Requisitos previos

- Node.js 18 o superior
- npm o yarn

## Instalación

```bash
npm install
```

## Ejecutar la aplicación

```bash
npm start
```

Esto levanta el proyecto en modo desarrollo. Por defecto Vite suele servir la app en:

```text
http://localhost:5173
```

## Scripts disponibles

```bash
npm start       # inicia la aplicación en modo desarrollo
npm run build   # genera la build de producción
npm run preview # sirve la build para revisión local
npm test        # ejecuta la suite de pruebas en modo interactivo
```

Para pruebas en modo no interactivo con Vitest:

```bash
npx vitest run
```

## Pruebas

El proyecto incluye una prueba básica que valida que el encabezado de la aplicación se renderiza correctamente.

```bash
npm test -- --run
```

## Flujo de uso

1. El usuario selecciona la marca del vehículo.
2. Elige el año del auto.
3. Selecciona el plan (básico o completo).
4. Hace clic en “COTIZAR”.
5. La aplicación valida los datos.
6. Muestra un spinner durante 2 segundos.
7. Presenta el resumen y el precio final calculado.

## Notas

- La lógica de cálculo está separada en helpers para facilitar mantenimiento y pruebas.
- El proyecto usa estilos con Emotion, lo que permite mantener componentes con un diseño limpio y modular.
- La aplicación está pensada como un ejemplo práctico de cotizador simple, sin backend ni persistencia de datos.
