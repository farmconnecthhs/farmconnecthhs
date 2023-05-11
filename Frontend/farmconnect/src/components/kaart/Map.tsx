import { LatLngExpression } from 'leaflet';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

interface MapProps {
  farms: { id: number; latitude: number; longitude: number; name: string }[];
}

const MapEffect: React.FunctionComponent = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
};

const Map: React.FunctionComponent<MapProps> = ({ farms }) => {
  const center: LatLngExpression = [52.3783, 4.9009];

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={center}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
      >
        <MapEffect />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {farms.map((farm) => (
          <Marker key={farm.id} position={[farm.latitude, farm.longitude]}>
            <Popup>{farm.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
