import React from 'react';

const ArrivalTable = ({ arrivals }) => {
  return (
    <table className="table table-bordered table-hover">
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
        {arrivals.map((arrival) => (
          <tr key={arrival.id} className="text-center">
            <td>{arrival.id}</td>
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
};

export default ArrivalTable;

