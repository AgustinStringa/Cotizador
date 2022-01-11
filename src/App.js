import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Message from "./components/Message";


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
  return (
    <>
      <Appliaction>
        <Header titulo={"Cotizador de seguros automóviles"} />
        <Main>
          <Formulario />
          <Message text={'Elige año, marca y tipo de seguro'} />
        </Main>
      </Appliaction>

    </>
  );
}

export default App;
