import React, { useState } from "react"
import SearchForm from '../components/weather/SearchForm'
import WeatherDisplay from '../components/weather/WeatherDisplay'
import img5 from '../assets/img5.jpg'
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <div className='relative min-h-screen w-full'>
      <img src={img5} className="h-1/2 w-full object-cover" alt="Background" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
        <div className="bg-indigo-900 bg-opacity-60 p-8  rounded-lg shadow-lg w-full max-w-lg">
          <SearchForm setWeatherData={setWeatherData} />
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>
      </div>
    </div>
  )
}

export default Weather
