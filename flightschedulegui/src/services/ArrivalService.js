import axios from 'axios';

const API_URL = 'http://localhost:8080/v1/api/flights/arrivals';

class ArrivalService {
  getAllArrivals() {
    return axios.get(API_URL);
  }

  createArrival(arrival) {
    return axios.post(API_URL, arrival);
  }

  updateArrival(id, updatedArrival) {
    const updateUrl = `${API_URL}/${id}`;
    return axios.put(updateUrl, updatedArrival);
  }

  deleteArrival(id) {
    const deleteUrl = `${API_URL}/${id}`;
    return axios.delete(deleteUrl);
  }

  clearArrivals() {
    return axios.delete(API_URL);
  }

}

export default new ArrivalService();
