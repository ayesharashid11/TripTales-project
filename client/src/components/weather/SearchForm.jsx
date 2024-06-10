import React, { useState } from "react";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
const apiKey = "1b3aa4a998314500ed4881710f566450";

const SearchForm = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city !== "") {
      fetchWeatherData(city);
      setCity("");
    }
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-1 p-2 border-2 border-emerald-700 rounded-lg text-md"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="ml-2  text-white rounded-lg "
      >
       <FaTemperatureThreeQuarters className="text-4xl "/>
      </button>
    </form>
  );
};

export default SearchForm;
