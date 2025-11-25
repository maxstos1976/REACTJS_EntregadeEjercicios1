import "./App.css";
import Cronometro from "./Cronometro";

function App() {
  return (
    <>
      <div className="enunciando">
        <h2>6. Temporizador com Inicio, Pausa y Reinicio</h2>
        <p>
          Objetivo del ejercicio: Practicar manejo de eventos, funciones de
          temporizacion y manipulacion del DOM.{" "}
        </p>
        <p>
          Ejercicio: Crea una pagina com um temporizador que comience em
          00:00:00.
        </p>
        <ul>
          <li>Incluye 3 botones: "Iniciar", "Pausar" y "Reiniciar"</li>
          <li>
            Al hacer click em "Iniciar", el temporizador debe comenzar a contar
            los segundos, minutos y horas.
          </li>
          <li>
            "Pausar" detiene el conteo pero mantiene el tempo actual. -
            "Reiniciar" pone el temporizador em 00:00:00.
          </li>
        </ul>
      </div>
      <Cronometro></Cronometro>
    </>
  );
}

export default App;
