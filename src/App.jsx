import { useState, useEffect } from "react";
import "./App.css";
import Boton from "./components/Boton";
import InputNumero from "./components/InputNumero";
import Mensaje from "./components/Mensaje";
import Intentos from "./components/Intentos";
import TituloApp from "./components/TituloApp";

function App() {
  const [numRandom, setNumRandom] = useState(0);
  const [numUsuario, setNumUsuario] = useState(0);
  const [intentos, setIntentos] = useState(10);
  const [mensaje, setMensaje] = useState("Vamos adivina el número!");

  function crearNumRandom() {
    const random = Math.floor(Math.random() * 101);
    setNumRandom(random);
  }

  const reiniciarJuego = () => {
    crearNumRandom();
    setMensaje("Se acabaron los intentos, se generó un nuevo número!");
    setIntentos(10);
  };

  /**
   * The function `compararNum` compares a user input number with a random number, provides feedback
   * based on the comparison, and updates the remaining attempts or restarts the game if needed.
   */
  const compararNum = () => {
    if (numUsuario === numRandom) {
      setMensaje("Adivinaste el número!!!");
    } else {
      const nuevosIntentos = intentos - 1;
      setIntentos(nuevosIntentos);
      if (nuevosIntentos === 0) {
        reiniciarJuego();
      } else if (numUsuario < numRandom) {
        setMensaje("Más arriba!");
      } else {
        setMensaje("Más abajo!");
      }
    }
  };

  useEffect(() => crearNumRandom(), []);

  return (
    <>
      <div className="mx-auto w-2xl text-center mt-40  p-6">
        <TituloApp styles={"mx-auto m-2"} />
        <Mensaje mensaje={mensaje} />
        <div className="mt-6">
          <InputNumero numUsuario={numUsuario} setNumUsuario={setNumUsuario} />
        </div>

        <Intentos intentos={intentos} />
        <div className="flex mx-auto mt-6 justify-center  gap-5">
          <Boton compararNum={compararNum} reiniciarJuego={reiniciarJuego}/>
          <Boton tipo="reiniciar" compararNum={compararNum} reiniciarJuego={reiniciarJuego} />
        </div>
      </div>
    </>
  );
}

export default App;
