// DepartureList.js
import React, { useState, useEffect } from 'react';
import DepartureTable from './DepartureTable'; // Asegúrate de tener la ruta correcta
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DepartureList = () => {
  const [departures, setDepartures] = useState([]);

  useEffect(() => {
    const fetchDepartures = async () => {
      try {
        const response = await fetch('http://localhost:8080/v1/api/flights/departures');
        const data = await response.json();

        if (departures.length < data.length) {
          const newRecord = data[data.length - 1];
          toast.success(`Nuevo Departure: ${newRecord.flightNumber} hacia ${newRecord.destination}`, {
            position: 'bottom-right',
            autoClose: 5000, // 5 segundos
            hideProgressBar: true,
          });
        }

        setDepartures(data);
      } catch (error) {
        console.error('Error fetching departures:', error);
      }
    };

    fetchDepartures();

    const intervalId = setInterval(fetchDepartures, 10000);

    return () => clearInterval(intervalId);
  }, [departures]);

  return (
    <div>
      <h1>Lista de Salidas</h1>
      <DepartureTable departures={departures} />
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default DepartureList;
