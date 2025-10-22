import { useState } from "react";

function App() {
  const [clics, setClics] = useState(0);

  // Función para generar un color aleatorio
  const contarClics = () => {
    setClics(clics + 1);
  };

  return (
    <div className="principal">
      <div className="descripcion">
        <h1>2. Contador de Clics</h1>
        <h3>
          Objetivo del ejercicio: Practicar el manejo de eventos y la
          actualización del contenido del DOM.
        </h3>
        <h3>
          Ejercicio: Crea una página con un botón que diga "Contar clics" y un
          texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el
          botón, el texto debe actualizarse para mostrar el número total de
          clics realizados.
        </h3>
        <button onClick={contarClics}>Contar Clics</button>
        <p>
          Clics: <span>{clics}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
