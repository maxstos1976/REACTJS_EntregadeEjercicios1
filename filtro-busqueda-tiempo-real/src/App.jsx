import { useState } from "react";

function App() {
  const listaAnimales = [
    "Pez",
    "Gato",
    "Perro",
    "Leon",
    "Gaviota",
    "Puma",
    "Oso",
  ];
  const [buscaItem, setbuscaItem] = useState("");

  // Filtra la lista según lo que escribe el usuario
  const listaFiltrada = listaAnimales.filter((item) =>
    item.toLowerCase().includes(buscaItem.toLowerCase())
  );

  return (
    <div className="principal">
      <div>
        <article>
          <h1>Filtro de Búsqueda en Tiempo Real</h1>
          <div>
            <h2>4. Filtro de Búsqueda en Tiempo Real </h2>
            <p>
              Objetivo del ejercicio: Practicar la interacción entre eventos del
              DOM y lógica en JavaScript.
            </p>
            <p>
              Ejercicio: Crea una página con un campo de texto y una lista
              predefinida de elementos.
            </p>

            <p>
              Mientras el usuario escribe en el campo, la lista debe
              actualizarse en tiempo real para mostrar solo los elementos que
              contienen el texto escrito.
            </p>

            <p>
              Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el
              usuario escribe "Ga", solo "Gato" debe quedar visible.
            </p>
          </div>
          <p>Buscar:</p>
          <input
            type="text"
            value={buscaItem}
            onChange={(e) => setbuscaItem(e.target.value)}
            placeholder="Buscar un ítem..."
          />
          <ul className="listaitens">
            {listaFiltrada.map((item) => (
              <li className="cadaitem" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

export default App;
