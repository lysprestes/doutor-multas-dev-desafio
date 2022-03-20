import { useState, useEffect } from 'react';
import axios from 'axios';
import AccordionItem from "./AccordionItem";
import Loading from './Loading';
import drmultas from '../static/drmultas.png';

export default function Accordion() {
  const [cars, setCars] = useState();
  const [bikes, setBikes] = useState();
  const [trucks, setTrucks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPI() {
      await axios
        .get(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
        .then(({data}) => setCars(data));
      await axios
        .get(`https://parallelum.com.br/fipe/api/v1/motos/marcas`)
        .then(({data}) => setBikes(data));
      await axios
        .get(`https://parallelum.com.br/fipe/api/v1/caminhoes/marcas`)
        .then(({data}) => setTrucks(data));
      setLoading(false);
    }
    fetchAPI();
  }, []);

  if (loading) return (<Loading />);
  return (
    <div>
      <div className="min-h-screen bg-gray-200 py-6">
        <div className="px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-300/50">
              <div className="py-5 text-base space-y-6 text-gray-700">
                <img src={drmultas} alt="" />
              </div>
            </div>
            <AccordionItem title="Carros" term="carros" list={cars}/>
            <AccordionItem title="Motos" term="motos" list={bikes}/>
            <AccordionItem title="Caminhões" term="caminhoes" list={trucks}/>
          </div>
        </div>
      </div>
    </div>
  )
}
