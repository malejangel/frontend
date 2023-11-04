import { NavBar } from './NavBar/NavBar';
import './App.css';
import { Tabla } from './Tabla/Tabla';
import { Acta } from './Encuesta/Acta';
import React from 'react';
import { LineaTabla } from './Tabla/LineaTabla/LineaTabla';

const listaDeActas = [
  { id: 1, proyecto: 'Fontibon', acta: 1235, encuestador: 'ale' },
  { id: 2, proyecto: 'Fontibon', acta: 1235, encuestador: 'ale' },
  { id: 3, proyecto: 'Fontibon', acta: 1235, encuestador: 'ale' },
  { id: 4, proyecto: 'Fontibon', acta: 1235, encuestador: 'ale' },

];

function App() {
  const [actas, setActas] = React.useState(listaDeActas);
  return (
    <>
      <NavBar />
      <div>
        <Tabla actas={actas} />
      </div>
      <Acta actas={actas} setActas={setActas} />

    </>

  );
}

export default App;
