import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hotels.css';
import hotelimage from '././Assets/hotel-a.jpg';
import hotelimage2 from '././Assets/hotel-b.jpg';
import hotelimage3 from '././Assets/hotel-c.jpg';

const Hotels = () => {
  const [showHotels, setShowHotels] = useState(false);

  const dummyData = [
    { id: 1, name: 'Hotel A', price: 150, image: hotelimage },
    { id: 2, name: 'Hotel B', price: 200, image: hotelimage2 },
    { id: 3, name: 'Hotel C', price: 250, image: hotelimage3 },
    { id: 4, name: 'Hotel D', price: 180, image: hotelimage },
    { id: 5, name: 'Hotel E', price: 220, image: hotelimage2 },
    { id: 6, name: 'Hotel F', price: 190, image: hotelimage3 },
    // Add more hotel data
  ];

  const handleSearch = (e) => {
    // Perform search logic to fetch and display hotels
    // For now, let's simulate hotel results with dummy data
    
    // Update the state to show the hotel results
    setShowHotels(true);
  };

  return (
    <div className="hotels-container">
      <h2 className="hotels-header">Hotels and Accommodation</h2>
      <div className="hotels-content">
        <button className="search-button" onClick={handleSearch}>
          Search Hotels
        </button>
        {showHotels ? (
          <div className="hotel-grid">
            {dummyData.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <div className="hotel-info">
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <p className="hotel-price">Price: ${hotel.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <Link to="/">Go to Flights</Link>
    </div>
  );
};

export default Hotels;

