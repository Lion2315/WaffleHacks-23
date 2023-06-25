import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Flights.css';


const Flights = () => {
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');
  const [flightResults, setFlightResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic based on fromDestination and toDestination values
    // You can use an API or any other method to fetch and display flight results
    // For now, let's simulate flight results with dummy data
    const dummyData = [
      { id: 1, airline: 'JetBlue SFO -> JFK', price: 300, departureTime: '09:00 AM', arrivalTime: '11:00 AM' },
      { id: 2, airline: 'United ORD -> EWR', price: 150, departureTime: '11:30 AM', arrivalTime: '01:30 PM' },
      { id: 3, airline: 'Southwest AMD -> LGA', price: 200, departureTime: '02:00 PM', arrivalTime: '04:00 PM' },
    ];
    setFlightResults(dummyData);
  };

  return (
    <div className="flights-container">
      <h2></h2>
      <Link to="/hotels"></Link>

      <div className="form-group">
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={fromDestination}
          onChange={(e) => setFromDestination(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={toDestination}
          onChange={(e) => setToDestination(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>Search Flights</button>

      <h2>Flight Results</h2>

      {flightResults.length > 0 ? (
        <ul className="flight-results">
          {flightResults.map((flight) => (
            <li key={flight.id}>
              <div className="flight-info">
                <span className="airline">{flight.airline}</span>
                <span className="price">Price: ${flight.price}</span>
              </div>
              <div className="flight-schedule">
                <span className="time">{flight.departureTime} - {flight.arrivalTime}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available.</p>
      )}
    </div>
  );
};

export default Flights;