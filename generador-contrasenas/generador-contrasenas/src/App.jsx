import "./App.css";
import { useState } from "react";
function App() {
  const [tamanho, setTamanho] = useState(8); // estado para o tamanho da senha
  const [senha, setSenha] = useState("");

  const caracteresMaiusculasAceitos = ["ABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789"];
  const caracteresEspeciaisAceitos = ["!@#$%^&*()_-+="];
  const caracteresMinusculasAceitos = caracteresMaiusculasAceitos.map((s) =>
    s.toLowerCase()
  );

  const caracteresAceitosTodos = [
    ...caracteresMaiusculasAceitos[0].split(""),
    ...caracteresMinusculasAceitos[0].split(""),
    ...caracteresEspeciaisAceitos[0].split(""),
  ];

  const gerarContrasena = (tamano) => {
    let resultado = "";
    const totalCaracteres = caracteresAceitosTodos.join("").length;
    console.log(totalCaracteres);
    for (let i = 0; i < tamano; i++) {
      const indiceRandom = Math.floor(Math.random() * totalCaracteres);
      resultado += caracteresAceitosTodos[indiceRandom];
    }
    return resultado;
  };

  return (
    <div className="principal">
      <h1>Generador Contraseñas</h1>
      <label>
        Número de caracteres:
        <input
          type="number"
          min="8"
          value={tamanho}
          onChange={(e) => setTamanho(Number(e.target.value))}
        />
      </label>
      <button onClick={() => setSenha(gerarContrasena(tamanho))}>
        Generar Contraseña
      </button>
      <span>{senha}</span>
    </div>
  );
}

export default App;
