import { useState, useEffect } from "react";
import "./App.css";
import Boton from "./components/Boton";
import InputNumero from "./components/InputNumero";
import Mensaje from "./components/Mensaje";
import Intentos from "./components/Intentos";
import TituloApp from "./components/TituloApp";
import ModalFelicitacion from "./components/ModalFelicitacion";

function App() {
  const [numRandom, setNumRandom] = useState(0);
  const [numUsuario, setNumUsuario] = useState(0);
  const [intentos, setIntentos] = useState(10);
  const [mensaje, setMensaje] = useState("Vamos adivina el número!");
  const [openModal, setOpenModal] = useState(false);

  function crearNumRandom() {
    const random = Math.floor(Math.random() * 101);
    setNumRandom(random);
  }

  const reiniciarJuego = () => {
    crearNumRandom();
    setIntentos(10);
  };

  /**
   * The function `compararNum` compares a user input number with a random number, provides feedback
   * based on the comparison, and updates the remaining attempts or restarts the game if needed.
   */
  const compararNum = () => {
    if (numUsuario === numRandom) {
      setOpenModal(true);
      reiniciarJuego();
      setMensaje("");
    } else {
      const nuevosIntentos = intentos - 1;
      setIntentos(nuevosIntentos);
      if (nuevosIntentos === 0) {
        reiniciarJuego();
        setMensaje("Se acabaron los intentos, se reinició el juego!");
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
          <Boton compararNum={compararNum} reiniciarJuego={reiniciarJuego} />
          <Boton
            tipo="reiniciar"
            compararNum={compararNum}
            reiniciarJuego={reiniciarJuego}
            setMensaje={setMensaje}
          />
        </div>
        <ModalFelicitacion openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </>
  );
}

export default App;
