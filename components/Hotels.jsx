import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hotels.css';
import hotelimage from './hotel-a.jpg';
import hotelimage2 from './hotel-b.jpg';
import hotelimage3 from './hotel-c.jpg';
import Navbar from './NavBar';

const Hotels = () => {
  const [showHotels, setShowHotels] = useState(false);

  const dummyData = [
    { id: 1, name: 'Blue Horizon Hotel', price: 150, image: hotelimage, rating : "4.3/5" },
    { id: 2, name: 'GEC Granville Suites', price: 200, image: hotelimage2, rating : "3.5/5" },
    { id: 3, name: 'Barclay Hotel', price: 250, image: hotelimage3, rating : "5/5" },
    { id: 4, name: 'Pan Pacific Vancouver', price: 180, image: hotelimage , rating : "4/5" },
    { id: 5, name: 'Georgian Court Hotel', price: 220, image: hotelimage2 , rating : "3/5" },
    { id: 6, name: 'The Sutton', price: 190, image: hotelimage3, rating : "3/5" },
    // Add more hotel data
  ];

  const handleSearch = (e) => {
    // Perform search logic to fetch and display hotels
    // For now, let's simulate hotel results with dummy data
    
    // Update the state to show the hotel results
    setShowHotels(true);
  };

  return (
    <>
          <Navbar/>
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
                  <h4 className="hotel-name">{hotel.name}</h4>
                  <p className="hotel-price">Price: ${hotel.price}</p>
                  <p className='rating'>Rating: {hotel.rating}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <Link to="/"></Link>
    </div>
    </>
  );
};

export default Hotels;
