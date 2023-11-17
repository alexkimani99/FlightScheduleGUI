// ArrivalList.js
import React, { useState, useEffect } from 'react';
import ArrivalTable from './ArrivalTable'; // Asegúrate de tener la ruta correcta
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArrivalList = () => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const fetchArrivals = async () => {
      try {
        const response = await fetch('http://localhost:8080/v1/api/flights/arrivals');
        const data = await response.json();

        if (arrivals.length < data.length) {
          const newRecord = data[data.length - 1];
          toast.success(`Nuevo Arrival: ${newRecord.flightNumber} desde ${newRecord.origin}`, {
            position: 'bottom-right',
            autoClose: 5000, // 5 segundos
            hideProgressBar: true,
          });
        }

        setArrivals(data);
      } catch (error) {
        console.error('Error fetching arrivals:', error);
      }
    };

    fetchArrivals();

    const intervalId = setInterval(fetchArrivals, 10000);

    return () => clearInterval(intervalId);
  }, [arrivals]);

  return (
    <div>
      <h1>Lista de Llegadas</h1>
      <ArrivalTable arrivals={arrivals} />
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default ArrivalList;
