// DepartureTable.js
import React from 'react';

const DepartureTable = ({ departures }) => (
  <table className="table table-bordered table-hover" style={{ backgroundColor: '#e6f7ff' }}>
    <thead className="thead-dark">
      <tr>
        <th>Airport</th>
        <th>Flight Number</th>
        <th>Destination</th>
        <th>ETD</th>
        <th>Total Passengers</th>
        <th>Total Luggage</th>
      </tr>
    </thead>
    <tbody>
      {departures.map(departure => (
        <tr key={departure.id}>
          <td>{departure.airport}</td>
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
