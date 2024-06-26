import React, {useState} from 'react'
import { Label, TextInput } from "flowbite-react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import scene3 from '../assets/scene3.jpg';

const SearchTour = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };
  return (
    <div>
      <div className="relative h-[50vh] w-full bg-cover bg-center">
        <img src={scene3} className="h-full w-full object-cover" alt="Background" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
          <div className="relative z-10 w-full max-w-md p-4 bg-white bg-opacity-70 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-center">
                <Label htmlFor="city" className="font-medium text-emerald-700 text-lg">
                  Location
                </Label>
                <TextInput
                  type="text"
                  id="city"
                  placeholder="Search your tour here"
                  className="text-lg flex-grow p-4"
                  icon={FaMapLocationDot}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <FaSearchLocation
                  className="text-5xl p-2 bg-emerald-700 text-white rounded cursor-pointer"
                  onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchTour
