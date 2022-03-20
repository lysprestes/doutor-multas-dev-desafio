import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

function Vehicles() {
  const { term, codigo } = useParams();

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://parallelum.com.br/fipe/api/v1/${term}/marcas/${codigo}/modelos`)
      .then(response => response.json())
      .then(data => setVehicles(data.modelos.reverse()))
      .then(() => setLoading(false))
  }, []);

  if (loading) return (<Loading />);

  return (
    <div>
      <div className="min-h-screen bg-gray-200 py-6">
        <div className="px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-300/50">
              <div className="py-5 text-base space-y-6 text-gray-700">
                <p>Procure seu veículo:</p>
              </div>
            </div>
            {vehicles.map(vehicle => (
              <div className="m-2 p-2 bg-blue-100 rounded-md" key={vehicle.codigo}>
                <span className="text-left hover:text-blue-600">{vehicle.nome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vehicles;
