import TextoCostumizavel from './components/textoColoridoEMaisculo/texto.js';
import Button from './components/button/button.js';

function App() {
  return (
    <div className='header'>
      <TextoCostumizavel texto="este é um texto totalmente colorido e com letras totalmente maiúsculas" cor='blue' />

      <Button label="Baixar CV" />
    </div>
  );
};

export default App;
