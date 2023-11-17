
import React from 'react';

const DepartureTable = ({ departures }) => (
  <table className="table table-bordered" style={{ backgroundColor: '#e6f7ff' }}>
    <thead style={{ backgroundColor: '#99c2ff' }}>
      <tr>
        <th>Aeropuerto</th>
        <th>Estado del Vuelo</th>
        <th>Tipo de Aeronave</th>
        <th>Número de Vuelo</th>
        <th>Destino</th>
        <th>ETD</th>
        <th>Total de Pasajeros</th>
        <th>Total de Equipaje</th>
      </tr>
    </thead>
    <tbody>
      {departures.map(departure => (
        <tr key={departure.id}>
          <td>{departure.airport}</td>
          <td>{departure.flightStatus}</td>
          <td>{departure.aircraftType}</td>
          <td>{departure.flightNumber}</td>
          <td>{departure.destination}</td>
          <td>{departure.estimatedTimeOfDeparture}</td>
          <td>{departure.totalPassengers}</td>
          <td>{departure.totalLuggage}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DepartureTable;
