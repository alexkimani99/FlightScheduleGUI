import axios from 'axios';

const API_URL = 'https://fssv-b05e293d0ff9.herokuapp.com/v1/api/flights/departures';

class DepartureService {
  getAllDepartures() {
    return axios.get(API_URL);
  }

  createDeparture(departure) {
    return axios.post(API_URL, departure);
  }
}

export default new DepartureService();
