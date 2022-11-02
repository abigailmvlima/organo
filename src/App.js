import Banner from './componentes/banner/index.js';
import CampoTexto from './componentes/campoTexto';

function App() {
  return (
    <div className='App'>
      <Banner />
      <CampoTexto label='Nome' placeholder='Digite seu nome' />
      <CampoTexto label='Cargo' placeholder='Digite seu cargo' />
      <CampoTexto label='Imagem' placeholder='Digite o endere seu nome' />
    </div>
  );
}

export default App;
