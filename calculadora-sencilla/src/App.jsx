// 5. Calculadora Sencilla
// Objetivo del ejercicio: Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript.
// Ejercicio:
// Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".
//  ● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
//    área de texto o debajo de los botones.
//  ● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).
import { useState } from "react";

function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const validarENumeros = () => {
    const n1 = Number(valor1);
    const n2 = Number(valor2);
    if (isNaN(n1) || isNaN(n2)) {
      alert("Nao numerico");
      return null;
    }
    return { n1, n2 };
  };

  // Función para sumar
  const hacerSuma = () => {
    const valores = validarENumeros();
    if (!valores) return;
    const { n1, n2 } = valores;
    setResultado(Number(n1) + Number(n2));
  };

  // Función para restar
  const hacerResta = () => {
    const valores = validarENumeros();
    if (!valores) return;
    const { n1, n2 } = valores;
    setResultado(Number(n1) - Number(n2));
  };

  // Función para multiplicar
  const hacerMultiplicacion = () => {
    const valores = validarENumeros();
    if (!valores) return;
    const { n1, n2 } = valores;
    setResultado(Number(n1) * Number(n2));
  };

  // Función para multiplicar
  const hacerDivision = () => {
    const valores = validarENumeros();
    if (!valores) return;
    if (valor2 == 0) {
      alert("Division por cero!!!");
      return;
    }
    setResultado(Number(valor1) / Number(valor2));
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <div className="inputs">
        <input
          type="text"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          placeholder="Digite um numero..."
        />
        <input
          type="text"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          placeholder="Digite um numero..."
        />
      </div>

      <div className="resultado">
        <span>{resultado}</span>
      </div>

      <div className="botones">
        <button onClick={hacerSuma}>Sumar</button>
        <button onClick={hacerResta}>Restar</button>
        <button onClick={hacerMultiplicacion}>Multiplicar</button>
        <button onClick={hacerDivision}>Dividir</button>
      </div>
    </div>
  );
}

export default App;
