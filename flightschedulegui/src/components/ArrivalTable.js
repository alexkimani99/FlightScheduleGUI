import React from 'react';

const ArrivalTable = ({ arrivals }) => (
  <table className="table table-bordered table-hover" style={{ backgroundColor: '#e6f7ff' }}>
    <thead className="thead-dark">
      <tr>
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
      {arrivals.map(arrival => (
        <tr key={arrival.id} className="text-center">
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

export default ArrivalTable;
