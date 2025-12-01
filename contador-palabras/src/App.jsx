import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Contador de palabras y caracteres</h1>
      <textarea
        name="texto"
        id="texto"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <div className="info">
        <p className="numero-palabras">
          palabras:{" "}
          {text.trim().replace(/\n/g, " ").split(/\s+/).filter(Boolean).length}
        </p>
        <p className="numero-caracteres">
          caracteres: {text.trim().replace(/\n/g, "").length}
        </p>
      </div>
    </div>
  );
}

export default App;
