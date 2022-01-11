import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";


const Appliaction = styled.div`
width: 65%;
margin: 0 auto;
text-align: center;
`;
const Main = styled.main`
background-color: #fffffff1;
padding: 2rem;
`;
function App() {
  return (
    <>
      <Appliaction>
        <Header titulo={"Cotizador de seguros automóviles"} />
        <Main>
          <Formulario />
        </Main>
      </Appliaction>

    </>
  );
}

export default App;
