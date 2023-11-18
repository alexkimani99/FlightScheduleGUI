import React, { useState, useEffect } from 'react';

const ArrivalTable = ({ arrivals }) => {
  const [highlightedRows, setHighlightedRows] = useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    const timeoutIds = [];

    arrivals.forEach((arrival, index) => {
      if (arrival.isNew || arrival.isUpdated || arrival.isDeleted) {
        setHighlightedRows((prev) => [...prev, index]);

        const timeoutId = setTimeout(() => {
          setHighlightedRows((prev) => prev.filter((i) => i !== index));
        }, 5000);

        timeoutIds.push(timeoutId);
      }
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [arrivals]);

  useEffect(() => {
    // Limpiar las filas eliminadas después de 5 segundos
    const timeoutId = setTimeout(() => {
      setDeletedRows([]);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [deletedRows]);

  return (
    <table className="table table-bordered table-hover" style={{ backgroundColor: '#e6f7ff' }}>
      <thead className="thead-dark">
        <tr>
          <th className="text-center">ID</th>
          <th className="text-center">Airport</th>
          <th className="text-center">Flight Status</th>
          <th className="text-center">Aircraft Type</th>
          <th className="text-center">Flight Number</th>
          <th className="text-center">Origin</th>
          <th className="text-center">ETA</th>
          <th className="text-center">Total Passengers</th>
          <th className="text-center">Total Luggage</th>
        </tr>
      </thead>
      <tbody>
        {arrivals.map((arrival, index) => (
          <tr
            key={arrival.id}
            className={`text-center ${
              highlightedRows.includes(index) ? 'table-info' : ''
            } ${deletedRows.includes(arrival.id) ? 'table-danger' : ''}`}
          >
            <td>{arrival.id}</td>
            <td>{arrival.airport}</td>
            <td>{arrival.flightStatus}</td>
            <td>{arrival.aircraftType}</td>
            <td>{arrival.flightNumber}</td>
            <td>{arrival.origin}</td>
            <td>{arrival.estimatedTimeOfArrival}</td>
            <td style={{ color: 'red', fontWeight: 'bold' }}>{arrival.totalPassengers}</td>
            <td style={{ color: 'orange', fontWeight: 'bold' }}>{arrival.totalLuggage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArrivalTable;
