// Importa el hook useState de React para manejar estados
import { useState } from "react";

function App() {
  // Estado para almacenar la lista de ítems
  const [lista, setLista] = useState([]);
  // Estado para controlar el valor actual del input
  const [novoItem, setNovoItem] = useState("");

  // Función para insertar un nuevo ítem en la lista
  const insertarItem = () => {
    // Si el campo está vacío o solo contiene espacios, no hace nada
    if (novoItem.trim() === "") {
      return;
    }

    // Crea un nuevo objeto con id único y nombre del ítem
    const item = {
      id: Date.now(),
      name: novoItem,
    };

    // Actualiza la lista agregando el nuevo ítem al final
    setLista((prevItens) => [...prevItens, item]);

    // Limpia el campo del input después de insertar
    setNovoItem("");
  };

  // Función para eliminar un ítem según su id
  const apagarItem = (itemId) => {
    // Filtra la lista para excluir el ítem con el id indicado
    setLista((prevItens) => prevItens.filter((item) => item.id !== itemId));
  };

  // Maneja la tecla presionada en el input
  const handleKeyDown = (e) => {
    // Si la tecla es Enter, llama a la función insertarItem
    if (e.key === "Enter") {
      insertarItem();
    }
  };

  return (
    <div className="principal">
      <h1>Lista Dinámica</h1>
      <p>Insertar un ítem:</p>
      <div>
        <input
          type="text"
          value={novoItem} // valor actual del estado
          onChange={(e) => setNovoItem(e.target.value)} // actualiza el estado al escribir
          onKeyDown={handleKeyDown} // escucha si se presiona Enter
          placeholder="Escribe un ítem"
        />
        {/* Botón para agregar el ítem */}
        <button onClick={insertarItem}>Insertar</button>
      </div>

      <ul>
        {lista.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => apagarItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
