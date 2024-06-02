import React from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'
import { useMap } from 'https://cdn.esm.sh/react-leaflet/hooks'
import {
  
    Marker,
    Popup,
  
    useMapEvents,
  } from "react-leaflet";
  import styles from "./Map.module.css";
const Map = () => {
    // const [position] = [40, 0];
  return (
    <div >
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

  </div>
);
}
 

export default Map
