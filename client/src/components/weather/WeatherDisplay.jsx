import React from "react";
import { getWeatherIconName } from "./utils";
import { BiWind } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi"
import { MdVisibility } from "react-icons/md";
const WeatherDisplay = ({ weatherData }) => {
  const {
    name,
    main: { temp, humidity },
    wind: { speed },
    visibility,
    weather,
  } = weatherData;

  const currentDate = new Date().toDateString();

  return (
    <div className="mt-6">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-emerald-200">{name}</h2>
        <p className="bg-blue-100 inline-block px-4 py-2 rounded-lg mt-2">{currentDate}</p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center space-x-2">
          <div className="material-icons text-4xl text-white">{getWeatherIconName(weather[0].main)}</div>
          <span className="text-2xl text-white">{weather[0].description}</span>
        </div>
        <div className="text-4xl font-bold text-emerald-200">{Math.round(temp)}°</div>
      </div>
      <div className="flex justify-around mt-4">
        <div className="text-center bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
        <BiWind className="text-emerald-700  text-3xl "/>
          <h3 className="text-xl font-semibold">{speed} KM/H</h3>
          <p className="text-gray-500">Wind</p>
        </div>
        <div className="text-center bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
        <WiHumidity className="text-emerald-700  text-3xl"/>
          <h3 className="text-xl font-semibold">{humidity} %</h3>
          <p className="text-gray-500">Humidity</p>
        </div>
        <div className="text-center bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
        <MdVisibility className="text-emerald-700  text-3xl"/>
          <h3 className="text-xl font-semibold">{visibility / 1000} KM</h3>
          <p className="text-gray-500">Visibility</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
