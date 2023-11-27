import React from 'react';
import ArrivalList from './components/ArrivalList';
import DepartureList from './components/DepartureList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      {/* Cover Section */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh', backgroundColor: '#343a40', color: 'white', marginBottom: '50px' }}
      >
        <div className="text-center">
          <h1 className="display-3 mb-4">Flight Schedule App</h1>
          <p className="lead">Manage and explore arrivals and departures.</p>
        </div>
      </div>

      <div className="container text-center" style={{ color: '#001f3f' }}>
        <h2 className="display-4 my-4">OPERATIONS | Flight Schedule</h2>
        <div className="row">
          <div className="col-md-12">
            <ArrivalList />
          </div>
          <div className="col-md-12 mt-3">
            <DepartureList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
