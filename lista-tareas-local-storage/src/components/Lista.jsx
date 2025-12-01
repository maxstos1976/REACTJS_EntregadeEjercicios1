import ItemLista from "./ItemLista";
import "./Lista.css";

function Lista({ lista, removerItem, alternarCompletado }) {
  return (
    <ol>
      {lista.map((item) => (
        <ItemLista
          key={item.id}
          id={item.id}
          texto={item.texto}
          completado={item.completado}
          removerItem={removerItem}
          alternarCompletado={alternarCompletado}
        />
      ))}
    </ol>
  );
}

export default Lista;
