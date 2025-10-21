import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  // Función para generar un color aleatorio
  const cambiarColor = () => {
    const nuevoColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setColor(nuevoColor);
  };

  // Convierte HEX a RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  // Calcula la luminosidad relativa
  const luminancia = (r, g, b) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  };

  // Actualiza el fondo y el color del texto cuando cambia el color
  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.transition = "background-color 0.5s ease";

    const [r, g, b] = hexToRgb(color);
    const lum = luminancia(r, g, b);
    // Si el fondo es claro → texto negro; si es oscuro → texto blanco
    setTextColor(lum > 0.5 ? "#000000" : "#FFFFFF");
  }, [color]);

  return (
    <div>
      <button onClick={cambiarColor}>Cambiar color Background</button>

      <p style={{ color: textColor }}>
        Color actual: <span>{color.toUpperCase()}</span>
      </p>
    </div>
  );
}

export default App;
