import { useState } from "react";

function App() {
  const [clics, setClics] = useState(0);

  // Función para generar un color aleatorio
  const contarClics = () => {
    setClics(clics + 1);
  };

  return (
    <div>
      <button onClick={contarClics}>Contar Clics</button>
      <p>
        Cuantidad de clics: <span>{clics}</span>
      </p>
    </div>
  );
}

export default App;
