import { useState } from "react";
import Banner from "./componentes/banner";
import Formulario from "./componentes/formulario";
import Time from "./componentes/time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Date Science" />
    </div>
  );
}

export default App;
