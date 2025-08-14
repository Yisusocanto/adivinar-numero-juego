function HistorialVictorias({historial}) {
  return (
    <div className="mt-8">
      <h3 className="text-4xl font-semibold">Historial de victorias</h3>
      <div className="flex justify-center gap-x-22">
        <div className="text-center">
          <h4 className="text-xl">Maquina</h4>
          <p className="text-lg">{historial["maquina"]}</p>
        </div>
        <div className="text-center">
          <h4 className="text-xl">Usuario</h4>
          <p className="text-lg">{historial["usuario"]}</p>
        </div>
      </div>
    </div>
  );
}

export default HistorialVictorias
