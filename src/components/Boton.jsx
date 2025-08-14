function Boton({
  tipo,
  compararNum,
  reiniciarJuego,
  setMensaje,
  guardarVictoria,
}) {
  return (
    <div>
      {tipo == "reiniciar" ? (
        <button
          onClick={() => {
            reiniciarJuego();
            setMensaje("Reiniciaste el juego!");
            guardarVictoria("maquina");
          }}
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-hidden focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none"
        >
          Reiniciar
        </button>
      ) : (
        <button
          onClick={compararNum}
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700  focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Adivinar
        </button>
      )}
    </div>
  );
}

export default Boton;
