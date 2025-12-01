import "./ItemLista.css";

function ItemLista(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.completado}
        onChange={() => props.alternarCompletado(props.id)}
      />{" "}
      <span
        style={{ textDecoration: props.completado ? "line-through" : "none" }}
      >
        {props.texto}
      </span>
      <button
        className="btn-excluir"
        onClick={() => props.removerItem(props.id)}
      >
        X
      </button>
    </li>
  );
}

export default ItemLista;
