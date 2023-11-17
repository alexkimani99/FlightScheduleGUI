// ArrivalList.js
import React, { Component } from 'react';
import ArrivalTable from './ArrivalTable'; // Asegúrate de tener la ruta correcta
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ArrivalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivals: [],
      initialLoad: true,
    };
  }

  componentDidMount() {
    this.fetchArrivals();
    setInterval(this.fetchArrivals, 10000);
  }

  fetchArrivals = async () => {
    try {
      const response = await fetch('http://localhost:8080/v1/api/flights/arrivals');
      const data = await response.json();

      if (!this.state.initialLoad && data.length > this.state.arrivals.length) {
        const newRecord = data[data.length - 1];
        this.showNotification(`Nuevo Arrival: ${newRecord.flightNumber} desde ${newRecord.origin}`);
      }

      this.setState({
        arrivals: data,
        initialLoad: false,
      });
    } catch (error) {
      console.error('Error fetching arrivals:', error);
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
        <h1 className="display-4 mb-4">Arrival List</h1>
        <ArrivalTable arrivals={this.state.arrivals} />
        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}

export default ArrivalList;
