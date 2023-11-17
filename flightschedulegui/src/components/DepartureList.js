// DepartureList.js
import React, { Component } from 'react';
import DepartureTable from './DepartureTable'; // Asegúrate de tener la ruta correcta
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DepartureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departures: [],
      initialLoad: true,
    };
  }

  componentDidMount() {
    this.fetchDepartures();
    setInterval(this.fetchDepartures, 10000);
  }

  fetchDepartures = async () => {
    try {
      const response = await fetch('http://localhost:8080/v1/api/flights/departures');
      const data = await response.json();

      if (!this.state.initialLoad && data.length > this.state.departures.length) {
        const newRecord = data[data.length - 1];
        this.showNotification(`Nuevo Departure: ${newRecord.flightNumber} hacia ${newRecord.destination}`);
      }

      this.setState({
        departures: data,
        initialLoad: false,
      });
    } catch (error) {
      console.error('Error fetching departures:', error);
    }
  };

  showNotification = (message) => {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: false, // No cerrar automáticamente
      hideProgressBar: true,
      closeOnClick: false,
    });
  };

  render() {
    return (
      <div>
        <h1 className="display-4 mb-4">Departure List</h1>
        <DepartureTable departures={this.state.departures} />
        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}

export default DepartureList;