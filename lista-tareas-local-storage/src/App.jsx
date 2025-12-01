import "./App.css";
import Lista from "./components/Lista.jsx";
import InsertItem from "./components/InsertItem.jsx";
import { useState, useEffect } from "react";

function App() {
  const [lista, setLista] = useState(() => {
    const saved = localStorage.getItem("lista");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Atualizar el LocalStorage siempre que la lista cambiar
    localStorage.setItem("lista", JSON.stringify(lista));
    console.log(localStorage.getItem("lista"));
  }, [lista]);

  const adicionarItem = (novoItem) => {
    if (novoItem.texto.trim() === "") return;
    const id = lista.length ? lista[lista.length - 1].id + 1 : 1;
    setLista([...lista, { ...novoItem, id }]);
  };

  const removerItem = (id) => {
    setLista((listaAtual) => listaAtual.filter((item) => item.id !== id));
  };

  const alternarCompletado = (id) => {
    const novaLista = lista.map((item) =>
      item.id === id ? { ...item, completado: !item.completado } : item
    );
    setLista(novaLista);
  };

  return (
    <div className="principal">
      <h1>Lista de Tareas</h1>
      <p className="no-hay-tareas">
        {lista.length === 0 ? "No hay tareas." : ""}
      </p>

      <Lista
        lista={lista}
        removerItem={removerItem}
        alternarCompletado={alternarCompletado}
      />
      <InsertItem adicionarItem={adicionarItem} />
    </div>
  );
}

export default App;
