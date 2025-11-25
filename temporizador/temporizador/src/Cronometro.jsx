import React, { useState, useEffect, useRef } from "react";
import "./Cronometro.css";

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const intervaloRef = useRef(null);

  useEffect(() => {
    if (ativo) {
      intervaloRef.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    } else if (!ativo && intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }

    return () => clearInterval(intervaloRef.current);
  }, [ativo]);

  // Formata o tempo em HH:MM:SS
  const formatarTempo = (totalSegundos) => {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const seg = totalSegundos % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
      2,
      "0"
    )}:${String(seg).padStart(2, "0")}`;
  };

  return (
    <div className="cronometro-container">
      <h1 className="titulo">Cronômetro</h1>
      <h2 className="tempo">{formatarTempo(segundos)}</h2>
      <div className="botoes">
        {!ativo ? (
          <button className="botao start" onClick={() => setAtivo(true)}>
            Iniciar
          </button>
        ) : (
          <button className="botao pause" onClick={() => setAtivo(false)}>
            Pausar
          </button>
        )}
        <button
          className="botao reset"
          onClick={() => {
            setSegundos(0);
            setAtivo(false);
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Cronometro;
