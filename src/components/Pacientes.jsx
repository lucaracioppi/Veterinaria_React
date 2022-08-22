function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("deseas eliminar el paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 ">
        Nombre: <span className="font-normal ">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 ">
        Propietario: <span className="font-normal ">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 ">
        Email: <span className="font-normal ">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 ">
        Fecha Alta: <span className="font-normal ">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 ">
        Síntomas: <span className="font-normal ">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 text-white font-bold rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white font-bold rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
export default Paciente;
