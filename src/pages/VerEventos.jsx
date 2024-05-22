import React , {useEffect} from "react";
import { getEventos} from "../core/apiCore";

function VerEventos() {
    const [eventos, setEventos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const eventosData = await getEventos();
                setEventos(eventosData);
                setLoading(false);
            } catch (error) {
                alert("Error obteniendo los eventos: " + error.message);
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);
  return (
    <div>

{loading ? (
                <p>Cargando eventos...</p>
            ) : (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Lugar
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Hora
              </th>
              <th scope="col" className="px-6 py-3">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-3">
                
              </th>
            </tr>
          </thead>
          <tbody>
          {eventos && eventos.map((evento) => (
              <tr
                key={evento.id}
                className=" odd:bg-gray-900 even:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-bold text-white whitespace-nowrap dark:text-white">
                  {evento.nombre}
                </td>
                <td className="px-6 py-4">{evento.lugar}</td>
                <td className="px-6 py-4">{evento.fecha}</td>
                <td className="px-6 py-4">{evento.hora}</td>
                <td className="px-6 py-4">{evento.descripcion}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Editar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )}
    </div>

  );
}

export default VerEventos;
