import { useState, useEffect } from "react";
import "./App.css";
import Boton from "./components/Boton";
import InputNumero from "./components/InputNumero";
import Mensaje from "./components/Mensaje";
import Intentos from "./components/Intentos";
import TituloApp from "./components/TituloApp";
import ModalFelicitacion from "./components/ModalFelicitacion";
import HistorialVictorias from "./components/HistorialVictorias";

function App() {
  const [numRandom, setNumRandom] = useState(0);
  const [numUsuario, setNumUsuario] = useState(0);
  const [intentos, setIntentos] = useState(10);
  const [mensaje, setMensaje] = useState("Adivina el numero, es del 1 al 100 y solo 10 intentos!!!");
  const [openModal, setOpenModal] = useState(false);
  const [historial, sethistorial] = useState({});

  function crearNumRandom() {
    const random = Math.floor(Math.random() * 101);
    setNumRandom(random);
  }

  const extraerhistorial = () => {
    let historialExtraido = JSON.parse(
      localStorage.getItem("historial-victorias")
    );
    if (!historialExtraido) historialExtraido = { maquina: 0, usuario: 0 };
    sethistorial(historialExtraido);
  };

  const guardarVictoria = (ganador) => {
    let nuevohistorial = { ...historial };
    nuevohistorial[ganador] += 1;
    sethistorial(nuevohistorial);
    localStorage.setItem("historial-victorias", JSON.stringify(nuevohistorial));
  };

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
      setMensaje("Adivina el numero, es del 1 al 100 y solo 10 intentos!!!");
      guardarVictoria("usuario");
    } else {
      const nuevosIntentos = intentos - 1;
      setIntentos(nuevosIntentos);
      if (nuevosIntentos === 0) {
        reiniciarJuego();
        setMensaje("Se acabaron los intentos, se reinició el juego!");
        guardarVictoria("maquina");
      } else if (numUsuario < numRandom) {
        setMensaje("Más arriba!");
      } else {
        setMensaje("Más abajo!");
      }
    }
  };

  useEffect(() => {
    crearNumRandom();
    extraerhistorial();
  }, []);

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
            guardarVictoria={guardarVictoria}
          />
        </div>
        <HistorialVictorias historial={historial} />
        <ModalFelicitacion openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </>
  );
}

export default App;
