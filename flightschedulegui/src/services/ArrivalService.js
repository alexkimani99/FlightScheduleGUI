import axios from 'axios';

const API_URL = 'http://localhost:8080/v1/api/flights/arrivals';

class ArrivalService {
  getAllArrivals() {
    return axios.get(API_URL);
  }

  createArrival(arrival) {
    return axios.post(API_URL, arrival);
  }
}

export default new ArrivalService();
