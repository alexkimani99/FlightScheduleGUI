import React, { Component } from 'react';
import DepartureTable from './DepartureTable';
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
      const response = await fetch('https://fssv-b05e293d0ff9.herokuapp.com/v1/api/flights/departures');
      const data = await response.json();

      const previousMaxId = this.state.departures.length > 0 ? Math.max(...this.state.departures.map(departure => departure.id)) : 0;

      this.setState({
        departures: data,
        initialLoad: false,
      });

      // Check if there is a new entry by comparing the ID
      if (!this.state.initialLoad && data.length > 0 && data[data.length - 1].id > previousMaxId) {
        const newRecord = data[data.length - 1];
        this.showNotification(`New Departure: ${newRecord.flightNumber} to ${newRecord.destination}`);
      }
    } catch (error) {
      console.error('Error fetching departures:', error);
    }
  };

  showNotification = (message) => {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: false,
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
