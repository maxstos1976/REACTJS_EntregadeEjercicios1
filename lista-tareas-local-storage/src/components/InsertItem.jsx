import { useState } from "react";
import "./InsertItem.css";
function InsertItem({ adicionarItem }) {
  const [texto, setTexto] = useState("");

  const InserirItem = () => {
    adicionarItem({ texto: texto, completado: false });
    setTexto(""); // limpia input
  };
  const handleClick = () => {
    InserirItem();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="inserir-item">
      <label>Añadir tarea:</label>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Insertar</button>
    </div>
  );
}

export default InsertItem;
