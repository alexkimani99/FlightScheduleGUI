import React, { Component } from 'react';
import ArrivalTable from './ArrivalTable'; // Make sure you have the correct path
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
    setInterval(this.fetchArrivals, 500); // Fetch arrivals every 5 seconds
  }

  fetchArrivals = async () => {
    try {
      const response = await fetch('https://fssv-b05e293d0ff9.herokuapp.com/v1/api/flights/arrivals');
      const data = await response.json();
  
      const previousMaxId = this.state.arrivals.length > 0 ? Math.max(...this.state.arrivals.map(arrival => arrival.id)) : 0;
  
      this.setState({
        arrivals: data,
        initialLoad: false,
      });
  
      // Check if there is a new entry by comparing the ID
      if (!this.state.initialLoad && data.length > 0 && data[data.length - 1].id > previousMaxId) {
        const newRecord = data[data.length - 1];
        this.showNotification(`New Arrival: ${newRecord.flightNumber} from ${newRecord.origin}`);
      }
    } catch (error) {
      console.error('Error fetching arrivals:', error);
    }
  };
  

  showNotification = (message) => {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: false, // Do not close automatically
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
