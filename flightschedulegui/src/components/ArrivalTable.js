import React from 'react';

const ArrivalTable = ({ arrivals }) => (
  <table className="table table-bordered table-hover" style={{ backgroundColor: '#e6f7ff' }}>
    <thead className="thead-dark">
      <tr>
        <th>Airport</th>
        <th>Flight Status</th>
        <th>Aircraft Type</th>
        <th>Flight Number</th>
        <th>Origin</th>
        <th>ETA</th>
        <th>Total Passengers</th>
        <th>Total Luggage</th>
      </tr>
    </thead>
    <tbody>
      {arrivals.map(arrival => (
        <tr key={arrival.id}>
          <td>{arrival.airport}</td>
          <td>{arrival.flightStatus}</td>
          <td>{arrival.aircraftType}</td>
          <td>{arrival.flightNumber}</td>
          <td>{arrival.origin}</td>
          <td>{arrival.estimatedTimeOfArrival}</td>
          <td>{arrival.totalPassengers}</td>
          <td>{arrival.totalLuggage}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ArrivalTable;
