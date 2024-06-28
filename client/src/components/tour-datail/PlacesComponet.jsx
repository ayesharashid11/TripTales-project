import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoStarSharp } from 'react-icons/io5';

const PlacesComponent = () => {
  const [city, setCity] = useState(''); 
  const [places, setPlaces] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [activeFilter, setActiveFilter] = useState('hotels'); 
  const [showMore, setShowMore] = useState(false); 
  const initialDisplayLimit = 6; 

  const fetchData = async (city) => {
    if (!city) {
      setError(' ');
      return; 
    }

    try {
      setLoading(true); 
      const response = await axios.get(`http://localhost:8080/api/overpass?city=${city}`);
      const fetchedData = response.data;
      if (!fetchedData.restaurants && !fetchedData.hotels && !fetchedData.pharmacies) {
        setError('No places found for this city.');
        setPlaces([]); 
      } else {
        const allPlaces = [
          ...(fetchedData.restaurants || []),
          ...(fetchedData.hotels || []),
          ...(fetchedData.pharmacies || [])
        ];
        setPlaces(allPlaces); 
        setActiveFilter('hotels'); 
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  const handleSearch = () => {
    fetchData(city); 
  };

  const handleFilter = async (type) => {
    if (!city) {
      setError('Please enter a city name first.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/overpass?city=${city}`);
      const fetchedData = response.data;

      switch (type) {
        case 'restaurants':
          setPlaces(fetchedData.restaurants || []);
          setActiveFilter('restaurants');
          break;
        case 'hotels':
          setPlaces(fetchedData.hotels || []);
          setActiveFilter('hotels');
          break;
        case 'pharmacies':
          setPlaces(fetchedData.pharmacies || []);
          setActiveFilter('pharmacies');
          break;
        default:
          setPlaces([]);
          setActiveFilter('hotels');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setShowMore(true); 
  };

  useEffect(() => {
    fetchData('');
  }, []);

  return (
    <div>
      <h2 className='text-xl md:text-3xl flex items-center justify-center text-emerald-700 font-semibold m-6'>
        Location Details
      </h2>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mr-2 p-2 border shadow-md border-gray-300 rounded-md"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-emerald-700 text-white rounded-md mr-2">
          Search
        </button>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={() => handleFilter('restaurants')}
          className={`px-4 py-2 ${activeFilter === 'restaurants' ? 'bg-green-500' : 'bg-gray-300'} text-white rounded-md mr-2`}
        >
          Restaurants
        </button>
        <button
          onClick={() => handleFilter('hotels')}
          className={`px-4 py-2 ${activeFilter === 'hotels' ? 'bg-yellow-500' : 'bg-gray-300'} text-white rounded-md mr-2`}
        >
          Hotels
        </button>
        <button
          onClick={() => handleFilter('pharmacies')}
          className={`px-4 py-2 ${activeFilter === 'pharmacies' ? 'bg-green-500' : 'bg-gray-300'} text-white rounded-md`}
        >
          Pharmacies
        </button>
      </div>

      {error && <p className='text-red-500'>{error}</p>}
      {loading ? (
        <p className='font-medium text-yellow-500 text-center text-xl'>Loading places...</p>
      ) : (
        <ul>
          {places.slice(0, showMore ? places.length : initialDisplayLimit).map((place) => (
            <li key={place.id || place.tags.name} className='mb-4 p-4 bg-white text-black border-2 border-emerald-700 rounded-2xl shadow-lg'>
              <h3>{place.tags.name}</h3>
              {place.tags['addr:street'] && (
                <p>
                  {place.tags['addr:street']} {place.tags['addr:housenumber']}, {place.tags['addr:city']}
                </p>
              )}
              {place.tags['opening_hours'] && (
                <p>Opening Hours: {place.tags['opening_hours']}</p>
              )}
              {place.tags.phone && <p>Phone: {place.tags.phone}</p>}
              {place.tags.website && <a href={place.tags.website}>Website</a>}
            </li>
          ))}
        </ul>
      )}
      
      {!showMore && (
        <button onClick={handleShowMore} className='block mx-auto my-4 px-4 py-2  text-emerald-700 rounded-md hover:underline'>
          Show More
        </button>
      )}

      <hr className='my-5' />
    </div>
  );
};

export default PlacesComponent;

