import TextoCostumizavel from './components/StyledText/index.js';
import Button from './components/AlertButton/index.js';

function App() {
  return (
    <div className='header'>
      <TextoCostumizavel texto="este é um texto totalmente colorido e com letras totalmente maiúsculas" cor='blue' />

      <Button label="Baixar CV" />
    </div>
  );
};

export default App;
